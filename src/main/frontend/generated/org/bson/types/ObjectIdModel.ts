import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type ObjectId_1 from "./ObjectId.js";
class ObjectIdModel<T extends ObjectId_1 = ObjectId_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(ObjectIdModel);
    get timestamp(): NumberModel_1 {
        return this[_getPropertyModel_1]("timestamp", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "int" } }));
    }
    get date(): StringModel_1 {
        return this[_getPropertyModel_1]("date", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.util.Date" } }));
    }
}
export default ObjectIdModel;
