package de.gohari.chat_with_paper.repository;

import de.gohari.chat_with_paper.model.ChatMessage;
import de.gohari.chat_with_paper.model.Paper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends MongoRepository<ChatMessage, String> {
    public List<ChatMessage> findByPaper(Paper paper);
}