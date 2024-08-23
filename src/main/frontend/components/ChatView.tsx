import ChatMessage from "Frontend/generated/de/gohari/chat_with_paper/model/ChatMessage";
import { ChatService } from "Frontend/generated/endpoints";
import { ReactAdapterElement, RenderHooks } from "Frontend/generated/flow/ReactAdapter";
import { ReactElement } from "react";
import {
  Button,
  HorizontalLayout, Icon,
  MessageInput,
  MessageInputSubmitEvent,
  MessageList, Tooltip,
  VerticalLayout
} from "@vaadin/react-components";

class ChatView extends ReactAdapterElement {
  protected render(hooks: RenderHooks): ReactElement | null {

    const [messages, setMessages] = hooks.useState<ChatMessage[]>("messages");
    const paperId = window.location.pathname.split("/")[2];

    function handleSubmit(event: MessageInputSubmitEvent) {
      let chatMessage: ChatMessage = { content: event.detail.value, role: "user" };
      setMessages([...messages, chatMessage]);

      ChatService.pushMessage(chatMessage, paperId).then((response) => {
        setMessages([...messages, chatMessage, response]);
      });
    }

    function clearMessages() {
      ChatService.clearMessages(paperId).then(_ => setMessages([]));
    }

    return (
      <VerticalLayout style={{ width: "28rem", height: "100%", overflow: "hidden", paddingBottom: "1rem" }}>
        <div style={{ flex: "1", overflow: "auto", display: "flex", flexDirection: "column-reverse" }}>
          <MessageList items={messages.map(message => {
            return {
              text: message.content,
              userName: message.role === "user" ? "You" : "AI",
              userColorIndex: message.role === "user" ? 1 : 2
            }
          })} />
        </div>
        <HorizontalLayout style={{ width: "100%", alignItems: "center" }}>
          <Button theme="icon" id="clear" onClick={clearMessages}>
            <Icon icon="vaadin:trash" />
          </Button>
          <Tooltip for="clear" position="top" text="Clear chat" />
          <MessageInput onSubmit={handleSubmit} style={{ flex: "1" }} />
        </HorizontalLayout>
      </VerticalLayout>
    );
  }
}

customElements.define('chat-view', ChatView);
