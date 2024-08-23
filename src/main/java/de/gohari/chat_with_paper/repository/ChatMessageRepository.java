package de.gohari.chat_with_paper.repository;

import de.gohari.chat_with_paper.model.ChatMessage;
import de.gohari.chat_with_paper.model.Paper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends MongoRepository<ChatMessage, String> {

  /**
   * Find all chat messages for a given paper.
   *
   * @param paper The paper to find messages for.
   * @return The list of messages.
   */
  public List<ChatMessage> findByPaper(Paper paper);

  /**
   * Delete all chat messages for a given paper.
   *
   * @param paper The paper to delete messages for.
   */
  public void deleteByPaper(Paper paper);
}
