import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
import type Paper_1 from "./de/gohari/chat_with_paper/model/Paper.js";
import type ObjectId_1 from "./org/bson/types/ObjectId.js";
import type MultipartFile_1 from "./org/springframework/web/multipart/MultipartFile.js";
async function delete_1(paperId: string, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("PaperService", "delete", { paperId }, init); }
async function load_1(id: string, init?: EndpointRequestInit_1): Promise<unknown> { return client_1.call("PaperService", "load", { id }, init); }
async function loadPreview_1(init?: EndpointRequestInit_1): Promise<Array<Paper_1>> { return client_1.call("PaperService", "loadPreview", {}, init); }
async function loadThumbnail_1(paperId: string, init?: EndpointRequestInit_1): Promise<unknown> { return client_1.call("PaperService", "loadThumbnail", { paperId }, init); }
async function save_1(multipartFile: MultipartFile_1, init?: EndpointRequestInit_1): Promise<Paper_1> { return client_1.call("PaperService", "save", { multipartFile }, init); }
async function saveThumbnail_1(pdfBytes: Array<number>, paperId: string, init?: EndpointRequestInit_1): Promise<ObjectId_1> { return client_1.call("PaperService", "saveThumbnail", { pdfBytes, paperId }, init); }
export { delete_1 as delete, load_1 as load, loadPreview_1 as loadPreview, loadThumbnail_1 as loadThumbnail, save_1 as save, saveThumbnail_1 as saveThumbnail };
