package de.gohari.chat_with_paper.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Data
@Document("chat_messages")
public class ChatMessage {

    @MongoId
    private String id;

    private String role;

    private String content;

    @JsonIgnore
    @DocumentReference
    private Paper paper;

    /**
     * Converts the chat message to an AI message.
     *
     * @return The AI message
     */
    public Message toAiMessage() {
        return switch (role) {
            case "user" -> new UserMessage(content);
            case "system" -> new SystemMessage(content);
            case "assistant" -> new AssistantMessage(content);
            default -> throw new IllegalArgumentException("Unknown role: " + role);
        };
    }
}
