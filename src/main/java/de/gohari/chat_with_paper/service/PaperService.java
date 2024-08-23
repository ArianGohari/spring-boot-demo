package de.gohari.chat_with_paper.service;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.Nonnull;
import de.gohari.chat_with_paper.model.Paper;
import de.gohari.chat_with_paper.repository.PaperRepository;
import lombok.RequiredArgsConstructor;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import java.util.List;
import java.util.NoSuchElementException;

@BrowserCallable
@AnonymousAllowed
@Service
@RequiredArgsConstructor
public class PaperService {

  private final Logger logger = LoggerFactory.getLogger(PaperService.class);

  private final PaperRepository paperRepository;

  private final ChatService chatService;

  private final TextEmbeddingService textEmbeddingService;

  private final GridFsOperations gridFsOperations;

  private final GridFsTemplate gridFsTemplate;

  /**
   * Save a new paper with the given multipart file into db.
   *
   * @param multipartFile The file to save.
   * @return The saved paper.
   * @throws IOException If an error occurs while saving the file.
   */
  public Paper save(MultipartFile multipartFile) throws IOException {
    logger.info("save | {}", multipartFile);

    // Get data from multipart file
    var name = multipartFile.getOriginalFilename();
    var inputStream = multipartFile.getInputStream();
    var contentType = multipartFile.getContentType();

    // Store file in GridFS and receive id
    var id = gridFsOperations.store(inputStream, name, contentType);

    // Create new paper object and save it in db
    var paper = new Paper();
    paper.setName(name);
    paper.setFileId(id.toHexString());
    paper = paperRepository.save(paper);

    // Create thumbnail for paper and save
    ObjectId thumbnailId = saveThumbnail(multipartFile.getBytes(), paper.getId());
    paper.setThumbnailId(thumbnailId.toHexString());
    paper = paperRepository.save(paper);

    // Create chunks for paper and save
    var chunks = textEmbeddingService.embed(multipartFile.getBytes(), (short) 2500, (short) 500);
    paper.setChunks(chunks);
    return paperRepository.save(paper);
  }

  /**
   * Load a paper from the db with the given id.
   *
   * @param id The id of the paper to load.
   * @return The input stream of the loaded paper.
   * @throws NoSuchElementException If the paper with the given id does not exist.
   * @throws IOException            If an error occurs while loading the paper.
   */
  public InputStream load(String id) throws NoSuchElementException, IOException {
    logger.info("load | {}", id);

    // Load paper from db
    var paper = paperRepository.findById(id).orElseThrow();

    // Create query and load respective file from GridFS
    var query = new Query(Criteria.where("_id").is(paper.getFileId()));
    var file = gridFsTemplate.findOne(query);

    // If found return input stream of file
    if (file != null) {
      var resource = gridFsOperations.getResource(file);
      return resource.getInputStream();
    }

    // Else throw exception
    else
      throw new NoSuchElementException();
  }

  /**
   * Load all papers from the db.
   *
   * @return List of all papers.
   */
  @Nonnull
  public List<Paper> loadPreview() {
    logger.info("loadPreview");
    return paperRepository.findAll();
  }

  /**
   * Create a thumbnail of the given file.
   *
   * @param pdfBytes The bytes of the pdf file to create a thumbnail from.
   * @param paperId  The id of the paper to save the thumbnail for.
   * @throws IOException If an error occurs while creating the thumbnail.
   * @return The id of the saved thumbnail.
   */
  public ObjectId saveThumbnail(byte[] pdfBytes, String paperId) throws IOException {
    logger.info("saveThumbnail | {}", paperId);

    // Load pdf file
    var document = Loader.loadPDF(pdfBytes);

    // Render first page of pdf file as image
    var pdfRenderer = new PDFRenderer(document);
    var bim = pdfRenderer.renderImageWithDPI(0, 300, ImageType.RGB);

    // Write image to file
    var outputFile = new File(paperId + ".png");
    ImageIO.write(bim, "png", outputFile);

    try (var inputStream = new FileInputStream(outputFile)) {
      var id = gridFsOperations.store(inputStream, paperId + ".png", "image/png");
      outputFile.deleteOnExit();
      return id;
    } catch (IOException e) {
      throw new IOException("Could not create thumbnail.");
    }
  }

  /**
   * Load the thumbnail of a paper from the db with the given id.
   *
   * @param paperId The id of the paper to load the thumbnail from.
   * @return The input stream of the loaded thumbnail.
   * @throws NoSuchElementException If the paper with the given id does not exist.
   * @throws IOException            If an error occurs while loading the
   *                                thumbnail.
   */
  public InputStream loadThumbnail(String paperId) throws NoSuchElementException, IOException {
    logger.info("loadThumbnail | {}", paperId);

    // Load paper from db
    var paper = paperRepository.findById(paperId).orElseThrow();

    // Create query and load respective file from GridFS
    var query = new Query(Criteria.where("_id").is(paper.getThumbnailId()));
    var file = gridFsTemplate.findOne(query);

    // If found return input stream of file
    if (file != null) {
      var resource = gridFsOperations.getResource(file);
      return resource.getInputStream();
    }

    // Else throw exception
    else
      throw new NoSuchElementException();
  }

  /**
   * Delete a paper from the db with the given id.
   *
   * @param paperId The id of the paper to delete
   */
  public void delete(String paperId) {
    logger.info("delete | {}", paperId);

    // Delete all chat messages for the paper
    chatService.clearMessages(paperId);

    // Delete paper
    paperRepository.deleteById(paperId);

  }
}
