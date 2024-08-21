package de.gohari.chat_with_paper.repository;

import de.gohari.chat_with_paper.model.Chunk;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChunkRepository extends MongoRepository<Chunk, String> {
}
