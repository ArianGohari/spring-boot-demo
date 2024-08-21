package de.gohari.chat_with_paper.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@Document("papers")
public class Paper {

    @MongoId
    private String id;

    private String fileId;

    private String thumbnailId;

    private String name;

    @JsonIgnore
    @DocumentReference
    private List<Chunk> chunks;
}
