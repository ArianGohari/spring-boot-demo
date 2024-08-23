interface Resource {
    open: boolean;
    file: unknown;
    readable: boolean;
    url: unknown;
    description: string;
    filename: string;
    uri: unknown;
    contentAsByteArray: Array<number>;
}
export default Resource;
