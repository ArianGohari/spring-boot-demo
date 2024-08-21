package de.gohari.chat_with_paper.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@Document("chunks")
public class Chunk {

    @MongoId
    private String id;

    @JsonIgnore
    private List<Double> embeddings;

    private String text;
}
