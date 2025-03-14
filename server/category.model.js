import { Schema, model } from "mongoose";
/* model
 name: string,
    schema?: Schema<T, any, any, TQueryHelpers, any, any, any>,
    collection?: string,
    options?: CompileModelOptions
 */
const CategorySchema = new Schema({
    name: String,
    parentId: { type: Schema.Types.ObjectId, ref: "Category", default: null }
});

export default model("Category", CategorySchema);

