import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: Number,
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" }
});

export default model("Product", ProductSchema);
