interface Resource {
    open: boolean;
    file: unknown;
    readable: boolean;
    url: unknown;
    contentAsByteArray: Array<number>;
    description: string;
    filename: string;
    uri: unknown;
}
export default Resource;
