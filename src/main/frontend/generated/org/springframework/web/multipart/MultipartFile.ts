import type Resource_1 from "../../core/io/Resource.js";
interface MultipartFile {
    name: string;
    bytes: Array<number>;
    empty: boolean;
    resource: Resource_1;
    size: number;
    inputStream: unknown;
    originalFilename: string;
    contentType: string;
}
export default MultipartFile;
