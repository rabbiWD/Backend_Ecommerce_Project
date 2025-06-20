import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        brandName: {type: String, required: true, unique: true},
        brandImage: {type: String, required: true, unique: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BrandModel = mongoose.model("brands", DataSchema);

export default BrandModel;