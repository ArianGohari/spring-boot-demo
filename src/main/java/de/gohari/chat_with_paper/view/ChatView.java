package de.gohari.chat_with_paper.view;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.react.ReactAdapterComponent;
import de.gohari.chat_with_paper.model.ChatMessage;

import java.util.List;

@Tag("chat-view")
@JsModule("components/ChatView.tsx")
public class ChatView extends ReactAdapterComponent {

    public void loadMessages(List<ChatMessage> messages) {
        setState("messages", messages);
    }
}
