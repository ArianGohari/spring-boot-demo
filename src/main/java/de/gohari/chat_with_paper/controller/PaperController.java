package de.gohari.chat_with_paper.controller;

import de.gohari.chat_with_paper.model.Paper;
import de.gohari.chat_with_paper.service.PaperService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PaperController {

  private final Logger logger = LoggerFactory.getLogger(PaperController.class);

  private final PaperService paperService;

  /**
   * Upload a paper
   *
   * @param file the paper file
   * @return the uploaded paper
   */
  @PostMapping("/papers")
  public ResponseEntity<Paper> upload(@RequestParam("file") MultipartFile file) {
    logger.info("upload | {}", file.getOriginalFilename());

    // Try to save the paper and return HTTP ok if successful
    try {
      var paper = paperService.save(file);
      return ResponseEntity.ok().body(paper);
    }

    // Return HTTP internal server error if failed
    catch (IOException e) {
      logger.error(e.getMessage());
      return ResponseEntity.internalServerError().build();
    }
  }

  /**
   * Download a paper
   *
   * @param id the paper id
   * @return the paper file
   */
  @GetMapping("/papers/{id}")
  public ResponseEntity<Resource> download(@PathVariable("id") String id) {
    logger.info("download | {}", id);

    // Try to load the file for given paper id and return it with HTTP ok if
    // successful
    try {

      // Load input stream from the file and create input stream resource
      var inputStream = paperService.load(id);
      var inputStreamResource = new InputStreamResource(inputStream);

      // Create HTTP headers and set accordingly
      var httpHeaders = new HttpHeaders();
      httpHeaders.setContentLength(inputStream.available());
      httpHeaders.setContentType(MediaType.APPLICATION_PDF);

      // Return HTTP ok with the file
      return ResponseEntity.ok().headers(httpHeaders).body(inputStreamResource);
    }

    // Return HTTP not found if the paper with given id is not found
    catch (NoSuchElementException e) {
      logger.error(e.getMessage());
      return ResponseEntity.notFound().build();
    }

    // Return HTTP internal server error if failed due to IO exception
    catch (IOException e) {
      logger.error(e.getMessage());
      return ResponseEntity.internalServerError().build();
    }
  }

  /**
   * Download the thumbnail of a paper
   *
   * @param paperId the paper id
   * @return the thumbnail file
   */
  @GetMapping("/papers/{paperId}/thumbnail")
  public ResponseEntity<Resource> downloadThumbnail(@PathVariable("paperId") String paperId) {
    logger.info("downloadThumbnail | {}", paperId);

    // Try to load the thumbnail for given paper id and return it with HTTP ok if
    // successful
    try {

      // Load input stream from the thumbnail and create input stream resource
      var inputStream = paperService.loadThumbnail(paperId);
      var inputStreamResource = new InputStreamResource(inputStream);

      // Create HTTP headers and set accordingly
      var httpHeaders = new HttpHeaders();
      httpHeaders.setContentLength(inputStream.available());
      httpHeaders.setContentType(MediaType.IMAGE_PNG);

      // Return HTTP ok with the thumbnail
      return ResponseEntity.ok().headers(httpHeaders).body(inputStreamResource);
    }

    // Return HTTP not found if the paper with given id is not found
    catch (NoSuchElementException e) {
      logger.error(e.getMessage());
      return ResponseEntity.notFound().build();
    }

    // Return HTTP internal server error if failed due to IO exception
    catch (IOException e) {
      logger.error(e.getMessage());
      return ResponseEntity.internalServerError().build();
    }
  }
}
