import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
{
    productID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"products"},
    userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"users"},
    desc: {type: String},
    rating: {type: String, required: true}, 
},
{
    timestamps: true,
    versionKey: false,
}
);

const ReviewrModel = mongoose.model("reviews", DataSchema);

export default ReviewrModel