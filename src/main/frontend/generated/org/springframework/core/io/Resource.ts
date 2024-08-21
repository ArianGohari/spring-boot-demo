interface Resource {
    open: boolean;
    file: unknown;
    readable: boolean;
    url: unknown;
    contentAsByteArray: Array<number>;
    uri: unknown;
    filename: string;
    description: string;
}
export default Resource;
