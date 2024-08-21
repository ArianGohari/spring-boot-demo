import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, BooleanModel as BooleanModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import ResourceModel_1 from "../../core/io/ResourceModel.js";
import type MultipartFile_1 from "./MultipartFile.js";
class MultipartFileModel<T extends MultipartFile_1 = MultipartFile_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(MultipartFileModel);
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get bytes(): ArrayModel_1<NumberModel_1> {
        return this[_getPropertyModel_1]("bytes", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "byte" } }), { meta: { javaType: "byte[]" } }));
    }
    get empty(): BooleanModel_1 {
        return this[_getPropertyModel_1]("empty", (parent, key) => new BooleanModel_1(parent, key, false, { meta: { javaType: "boolean" } }));
    }
    get resource(): ResourceModel_1 {
        return this[_getPropertyModel_1]("resource", (parent, key) => new ResourceModel_1(parent, key, false));
    }
    get size(): NumberModel_1 {
        return this[_getPropertyModel_1]("size", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "long" } }));
    }
    get inputStream(): ObjectModel_1 {
        return this[_getPropertyModel_1]("inputStream", (parent, key) => new ObjectModel_1(parent, key, false, { meta: { javaType: "java.io.InputStream" } }));
    }
    get originalFilename(): StringModel_1 {
        return this[_getPropertyModel_1]("originalFilename", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get contentType(): StringModel_1 {
        return this[_getPropertyModel_1]("contentType", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
}
export default MultipartFileModel;
