interface Resource {
    open: boolean;
    file: unknown;
    readable: boolean;
    url: unknown;
    uri: unknown;
    description: string;
    filename: string;
    contentAsByteArray: Array<number>;
}
export default Resource;
