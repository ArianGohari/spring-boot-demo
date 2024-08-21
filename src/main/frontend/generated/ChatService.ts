import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
import type ChatMessage_1 from "./de/gohari/chat_with_paper/model/ChatMessage.js";
import type Chunk_1 from "./de/gohari/chat_with_paper/model/Chunk.js";
async function clearMessages_1(init?: EndpointRequestInit_1): Promise<void> { return client_1.call("ChatService", "clearMessages", {}, init); }
async function loadMessagesForPaper_1(paperId: string, init?: EndpointRequestInit_1): Promise<Array<ChatMessage_1>> { return client_1.call("ChatService", "loadMessagesForPaper", { paperId }, init); }
async function pushMessage_1(message: ChatMessage_1, paperId: string, init?: EndpointRequestInit_1): Promise<ChatMessage_1> { return client_1.call("ChatService", "pushMessage", { message, paperId }, init); }
async function uploadChunks_1(chunks: Array<Chunk_1>, paperId: string, init?: EndpointRequestInit_1): Promise<ChatMessage_1> { return client_1.call("ChatService", "uploadChunks", { chunks, paperId }, init); }
export { clearMessages_1 as clearMessages, loadMessagesForPaper_1 as loadMessagesForPaper, pushMessage_1 as pushMessage, uploadChunks_1 as uploadChunks };
