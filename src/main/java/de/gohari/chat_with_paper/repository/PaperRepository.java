package de.gohari.chat_with_paper.repository;

import de.gohari.chat_with_paper.model.Paper;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaperRepository extends MongoRepository<Paper, String> {
}