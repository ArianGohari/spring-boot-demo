import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, BooleanModel as BooleanModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Resource_1 from "./Resource.js";
class ResourceModel<T extends Resource_1 = Resource_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(ResourceModel);
    get open(): BooleanModel_1 {
        return this[_getPropertyModel_1]("open", (parent, key) => new BooleanModel_1(parent, key, false, { meta: { javaType: "boolean" } }));
    }
    get file(): ObjectModel_1 {
        return this[_getPropertyModel_1]("file", (parent, key) => new ObjectModel_1(parent, key, false, { meta: { javaType: "java.io.File" } }));
    }
    get readable(): BooleanModel_1 {
        return this[_getPropertyModel_1]("readable", (parent, key) => new BooleanModel_1(parent, key, false, { meta: { javaType: "boolean" } }));
    }
    get url(): ObjectModel_1 {
        return this[_getPropertyModel_1]("url", (parent, key) => new ObjectModel_1(parent, key, false, { meta: { javaType: "java.net.URL" } }));
    }
    get uri(): ObjectModel_1 {
        return this[_getPropertyModel_1]("uri", (parent, key) => new ObjectModel_1(parent, key, false, { meta: { javaType: "java.net.URI" } }));
    }
    get description(): StringModel_1 {
        return this[_getPropertyModel_1]("description", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get filename(): StringModel_1 {
        return this[_getPropertyModel_1]("filename", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get contentAsByteArray(): ArrayModel_1<NumberModel_1> {
        return this[_getPropertyModel_1]("contentAsByteArray", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "byte" } }), { meta: { javaType: "byte[]" } }));
    }
}
export default ResourceModel;
