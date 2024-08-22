interface Resource {
    open: boolean;
    file: unknown;
    readable: boolean;
    url: unknown;
    contentAsByteArray: Array<number>;
    filename: string;
    description: string;
    uri: unknown;
}
export default Resource;
