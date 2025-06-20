import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
{
    title: {type: String, required: true, unique: true},
    shortDes: {type: String, required: true},
    price: {type: Boolean, required: true},
    discount: {type: String, required: true},
    discountPrice: {type: String, required: true},
    image: {type: String, required: true},
    stock: {type: Boolean, required: true},
    remark: {type: String, required: true},
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"categories"},
    brandID : { type: mongoose.Schema.Types.ObjectId, required: true, ref:"brands"},
},
{
    timestamps: true,
    versionKey: false,
}
);

const ProductModel = mongoose.model("products", DataSchema);

export default ProductModel