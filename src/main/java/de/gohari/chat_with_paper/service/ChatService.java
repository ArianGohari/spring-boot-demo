package de.gohari.chat_with_paper.service;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.Nonnull;
import de.gohari.chat_with_paper.model.ChatMessage;
import de.gohari.chat_with_paper.model.Chunk;
import de.gohari.chat_with_paper.repository.ChatMessageRepository;
import de.gohari.chat_with_paper.repository.PaperRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.SystemPromptTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@BrowserCallable
@AnonymousAllowed
@Service
@RequiredArgsConstructor
public class ChatService {

  private final Logger logger = LoggerFactory.getLogger(ChatService.class);

  private final ChatMessageRepository chatMessageRepository;

  private final PaperRepository paperRepository;

  private final TextEmbeddingService textEmbeddingService;

  private final ChatClient chatClient;

  @Value("classpath:/static/prompts/main-prompt.st")
  private Resource mainPrompt;

  /**
   * Load all messages
   *
   * @return list of messages from db
   * @param paperId The paper id to load messages for
   */
  @Nonnull
  public List<ChatMessage> loadMessagesForPaper(String paperId) {
    logger.info("loadMessagesForPaper | {}", paperId);

    // Load paper from db
    var paper = paperRepository.findById(paperId).orElseThrow();

    // Load messages from db
    return chatMessageRepository.findByPaper(paper);
  }

  /**
   * Push a message to the chat
   *
   * @param message the message to push
   * @return the response message
   */
  @Nonnull
  public ChatMessage pushMessage(@Nonnull ChatMessage message, @Nonnull String paperId) {
    logger.info("pushMessage | {}, {}", message, paperId);

    // Load paper from db
    var paper = paperRepository.findById(paperId).orElseThrow();

    // Set paper for the message
    message.setPaper(paper);

    // Save user message into db
    chatMessageRepository.save(message);

    // Get best matching context for the user message
    var context = textEmbeddingService.similaritySearch(paper, message.getContent());

    // Create prompt from user message and context
    var promptMap = Map.of("input", message.getContent(), "context", context);
    var prompt = new SystemPromptTemplate(mainPrompt).create(promptMap);

    // Call the chat client to get assistant response
    var response = chatClient.prompt(prompt).call();

    // Save assistant response into db and return it
    var responseMessage = new ChatMessage();
    responseMessage.setRole("assistant");
    responseMessage.setContent(response.content());
    responseMessage.setPaper(paper);

    // Save assistant response into db
    return chatMessageRepository.save(responseMessage);
  }

  /**
   * Upload chunks of a paper
   *
   * @param chunks  the chunks to upload
   * @param paperId the paper id
   * @return the response message
   */
  public ChatMessage uploadChunks(@Nonnull List<Chunk> chunks, @Nonnull String paperId) {
    logger.info("uploadChunks | {}, {}", chunks, paperId);

    // Create system messages for the chunks
    var systemMessages = chunks.stream()
        .map(chunk -> {
          var message = new ChatMessage();
          message.setRole("system");
          message.setContent("The user is uploading a chunk of a paper:\n" + chunk.getText());
          return message;
        })
        .toList();

    // Save system messages into db
    systemMessages = chatMessageRepository.saveAll(systemMessages);

    // Call the chat client to get assistant response
    var systemAiMessages = systemMessages.stream().map(ChatMessage::toAiMessage).toList();
    var response = chatClient.prompt().messages(systemAiMessages).call();

    // Save assistant response into db and return it
    var responseMessage = new ChatMessage();
    responseMessage.setRole("assistant");
    responseMessage.setContent(response.content());
    return chatMessageRepository.save(responseMessage);
  }

  /**
   * Clear all messages for a paper
   * 
   * @param paperId The paper id to clear messages for
   */
  public void clearMessages(String paperId) {
    logger.info("clearMessages");

    // Load paper from db
    var paper = paperRepository.findById(paperId).orElseThrow();

    // Delete all messages for the paper
    chatMessageRepository.deleteByPaper(paper);
  }
}
