package de.gohari.chat_with_paper.service;

import de.gohari.chat_with_paper.model.Chunk;
import de.gohari.chat_with_paper.model.Paper;
import de.gohari.chat_with_paper.repository.ChunkRepository;
import lombok.RequiredArgsConstructor;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.text.PDFTextStripper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TextEmbeddingService {

  private final Logger logger = LoggerFactory.getLogger(TextEmbeddingService.class);

  private final EmbeddingModel embeddingModel;

  private final ChunkRepository chunkRepository;

  /**
   * Embeds the given text and saves the embeddings in the database.
   *
   * @param text The text to be embedded
   * @return The chunk with the embeddings
   */
  private Chunk embedChunk(String text) {
    logger.info("embedChunk");

    // Get the embeddings of the text
    var embeddings = embeddingModel.embed(text);

    // Create a new chunk and set its text and embeddings
    var chunk = new Chunk();
    chunk.setText(text);
    chunk.setEmbeddings(embeddings);
    // Return the chunk
    return chunk;
  }

  /**
   * Embeds the content of the paragraphs of the given paper and saves the
   * embeddings in the database.
   *
   * @param pdfBytes     The bytes of the pdf file to be embedded
   * @param chunkSize    The size of the chunks
   * @param chunkOverlap The overlap of the chunks
   * @return The list of chunks with the embeddings
   */
  public List<Chunk> embed(byte[] pdfBytes, short chunkSize, short chunkOverlap) throws IOException {
    logger.info("embed");

    // Load pdf file and its text
    var document = Loader.loadPDF(pdfBytes);
    var textStripper = new PDFTextStripper();
    var text = textStripper.getText(document);

    // Initialize chunks list
    var chunkTexts = new ArrayList<String>();

    // Iterate over the chunks and embed the chunks
    for (int i = 0; i < text.length(); i += chunkSize - chunkOverlap) {
      logger.info("embed | {}%", i * 100 / text.length());

      chunkTexts.add(text.substring(i, Math.min(i + chunkSize, text.length())));
    }

    var chunks = chunkTexts.parallelStream().map(this::embedChunk).toList();

    // Save the chunks into db
    return chunkRepository.saveAll(chunks);
  }

  /**
   * Calculates the cosine similarity between two embeddings.
   *
   * @param embeddings1 The first embeddings
   * @param embeddings2 The second embeddings
   * @return The cosine similarity
   */
  private double cosineSimilarity(List<Double> embeddings1, List<Double> embeddings2) {
    logger.info("cosineSimilarity");

    // Initialize variables
    var dotProduct = 0.0;
    var norm1 = 0.0;
    var norm2 = 0.0;

    // Calculate the dot product and the norms
    for (var i = 0; i < embeddings1.size(); i++) {
      dotProduct += embeddings1.get(i) * embeddings2.get(i);
      norm1 += Math.pow(embeddings1.get(i), 2);
      norm2 += Math.pow(embeddings2.get(i), 2);
    }

    // Return the cosine similarity
    var similarity = dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
    logger.info("cosineSimilarity -> {}", similarity);
    return similarity;

  }

  /**
   * Searches for the most similar chunk to the input query in the given paper.
   *
   * @param paper      The paper to search in
   * @param inputQuery The input query
   * @return The most similar chunk
   */
  public Chunk similaritySearch(Paper paper, String inputQuery) {
    logger.info("similaritySearch | {}, {}", paper.getId(), inputQuery);

    // Initialize variables and get paper chunks
    var highestSimilarity = 0.0;
    var hightestSmilarityIndex = 0;
    var chunks = paper.getChunks();

    // Iterate over all chunks and calculate the similarity
    for (int i = 0; i < chunks.size(); i++) {

      // Get the embeddings of the chunk and the input query
      var chunkEmbedding = chunks.get(i).getEmbeddings();
      var inputQueryEmbedding = embeddingModel.embed(inputQuery);

      // Calculate the cosine similarity
      var similarity = cosineSimilarity(chunkEmbedding, inputQueryEmbedding);

      // Update the highest similarity if necessary
      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        hightestSmilarityIndex = i;
      }
    }

    // Return the most similar chunk
    var mostSimilarChunk = chunks.get(hightestSmilarityIndex);
    logger.info("similaritySearch | highestSimilarity -> {}", highestSimilarity);
    logger.info("similaritySearch | hightestSmilarityIndex -> {}", hightestSmilarityIndex);
    logger.info("similaritySearch -> {}", mostSimilarChunk);
    return mostSimilarChunk;
  }
}
