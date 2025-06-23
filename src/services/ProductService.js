import mongoose from "mongoose"
import BrandModel from "../models/BrandModel.js"
import CategoryModel from "../models/CategoryModel.js";
import ProductSliderModel from "../models/ProductSliderModel.js";
import ProductModel from "../models/ProductModel.js";
import ReviewModel from "../models/ReviewModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const BrandListService = async ()=>{
    try {
        const data = await BrandModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
}

export const CategoryListService = async ()=>{
    try {
        const data = await CategoryModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
}

export const SliderListService = async ()=>{
    try {
        const data = await ProductSliderModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
}

export const ListByBrandService = async(req)=>{
    try {
        const brandID =new ObjectId(req.params.brandID)
        const matchStage = {$match:{brandID: brandID}}
        const joinWithBrandStage = {$lookup: {
            from:"brands", 
            localField:"brandID", 
            foreignField:"_id", 
            as:"brand"}}
        const joinWithCategoryStage = {$lookup: {
            from:"categories", 
            localField:"categoryID", 
            foreignField:"_id", 
            as:"category",
        },
    };

    const UnwindBrandStage = {$unwind: "$brand"}
    const UnwindCategoryStage = {$unwind: "$category"}  

    let ProjectionStage = {$project:{'brand._id': 0, 'category._id': 0, brandID: 0}}//প্রজেকশন মানে হচ্ছে, আমি কি কি ডাটা দেখাতে চাই সেটা।

    let data = await ProductModel.aggregate([
        matchStage, 
        joinWithBrandStage, 
        joinWithCategoryStage, 
        UnwindBrandStage, 
        UnwindCategoryStage, 
        ProjectionStage,
    ])
     return {status: "success", data: data};
    } catch (error) {
         return {status: "fail", data: err}.toString();
    }
}

export const ListByCategoryService = async(req)=>{
    try {
        const CategoryID =new ObjectId(req.params.CategoryID)
        const matchStage = {$match:{categoryID: CategoryID}}
        const joinWithBrandStage = {$lookup: {
            from:"brands", 
            localField:"brandID", 
            foreignField:"_id", 
            as:"brand"}}
        const joinWithCategoryStage = {$lookup: {
            from:"categories", 
            localField:"categoryID", 
            foreignField:"_id", 
            as:"category",
        },
    };

    const UnwindBrandStage = {$unwind: "$brand"}
    const UnwindCategoryStage = {$unwind: "$category"}  

    let ProjectionStage = {$project:{        //প্রজেকশন মানে হচ্ছে, আমি কি কি ডাটা দেখাতে চাই সেটা।
        'brand._id': 0, 
        'category._id': 0, 
        categoryID: 0,
        brandID: 0,
    }}

    let data = await ProductModel.aggregate([
        matchStage, 
        joinWithBrandStage, 
        joinWithCategoryStage, 
        UnwindBrandStage, 
        UnwindCategoryStage, 
        ProjectionStage,
    ])
     return {status: "success", data: data};
    } catch (error) {
         return {status: "fail", data: err}.toString();
    }
}

export const ListBySimilierService = async(req)=>{
    try {
        const CategoryID =new ObjectId(req.params.CategoryID);
        const matchStage = {$match:{categoryID: CategoryID}};
        let limitStage = {$limit: 20};

        const joinWithBrandStage = {$lookup: {
            from:"brands", 
            localField:"brandID", 
            foreignField:"_id", 
            as:"brand"}}
        const joinWithCategoryStage = {$lookup: {
            from:"categories", 
            localField:"categoryID", 
            foreignField:"_id", 
            as:"category",
        },
    };

    const UnwindBrandStage = {$unwind: "$brand"};
    const UnwindCategoryStage = {$unwind: "$category"}; 

    let ProjectionStage = {$project:{        //প্রজেকশন মানে হচ্ছে, আমি কি কি ডাটা দেখাতে চাই সেটা।
        'brand._id': 0, 
        'category._id': 0, 
        categoryID: 0,
        brandID: 0,
    }}

    let data = await ProductModel.aggregate([
        matchStage, 
        limitStage,
        joinWithBrandStage, 
        joinWithCategoryStage, 
        UnwindBrandStage, 
        UnwindCategoryStage, 
        ProjectionStage,
    ])
     return {status: "success", data: data};
    } catch (error) {
         return {status: "fail", data: err}.toString();
    }
}

export const ListByKeywordService = async(req)=>{
    try {
        let SearchRegex = {"$regex": req.params.KeywordID, "$options": "i"};
        let SearchParams = [{title: SearchRegex}, { shortDes: SearchRegex}];
        let SearchQuery = {$or: SearchParams};

        let matchStage = {$match: SearchQuery};

        const joinWithBrandStage = {$lookup: {
            from:"brands", 
            localField:"brandID", 
            foreignField:"_id", 
            as:"brand"}}
        const joinWithCategoryStage = {$lookup: {
            from:"categories", 
            localField:"categoryID", 
            foreignField:"_id", 
            as:"category",
        },
    };

    const UnwindBrandStage = {$unwind: "$brand"};
    const UnwindCategoryStage = {$unwind: "$category"};

     let ProjectionStage = {$project:{        //প্রজেকশন মানে হচ্ছে, আমি কি কি ডাটা দেখাতে চাই সেটা।
        'brand._id': 0, 
        'category._id': 0, 
        'categoryID': 0,
        'brandID': 0,
    }}

    let data = await ProductModel.aggregate([
        matchStage, 
        joinWithBrandStage, 
        joinWithCategoryStage, 
        UnwindBrandStage, 
        UnwindCategoryStage, 
        ProjectionStage,
    ])
     return {status: "success", data: data};


    } catch (err) {
         return {status: "fail", data: err}.toString();
    }
}

export const ListByRemarkService = async(req)=>{
    try {
        let Remark = req.params.RemarkID;
        let matchStage = {$match:{remark: Remark}};

        const joinWithBrandStage = {$lookup: {
            from:"brands", 
            localField:"brandID", 
            foreignField:"_id", 
            as:"brand"}}
        const joinWithCategoryStage = {$lookup: {
            from:"categories", 
            localField:"categoryID", 
            foreignField:"_id", 
            as:"category",
        },
    };

    const UnwindBrandStage = {$unwind: "$brand"};
    const UnwindCategoryStage = {$unwind: "$category"};

     let ProjectionStage = {$project:{        //প্রজেকশন মানে হচ্ছে, আমি কি কি ডাটা দেখাতে চাই সেটা।
        'brand._id': 0, 
        'category._id': 0, 
        'categoryID': 0,
        'brandID': 0,
    }}

    let data = await ProductModel.aggregate([
        matchStage, 
        joinWithBrandStage, 
        joinWithCategoryStage, 
        UnwindBrandStage, 
        UnwindCategoryStage, 
        ProjectionStage,
    ])
     return {status: "success", data: data};


    } catch (err) {
         return {status: "fail", data: err}.toString();
    }
}

export const DetailsService = async(req)=>{
    try {
       let ProductID = new ObjectId(req.params.ProductID);
       let matchStage = {$match: {_id: ProductID}}

        const joinWithBrandStage = {$lookup: {
            from:"brands", 
            localField:"brandID", 
            foreignField:"_id", 
            as:"brand"}}
        const joinWithCategoryStage = {$lookup: {
            from:"categories", 
            localField:"categoryID", 
            foreignField:"_id", 
            as:"category",
        },
    };

        const joinWithDetailsStage = {$lookup: {
            from:"productdetails", 
            localField:"_id", 
            foreignField:"productID", 
            as:"details",
        },
    };

    const UnwindBrandStage = {$unwind: "$brand"};
    const UnwindCategoryStage = {$unwind: "$category"};
    const UnwindDetailsStage = {$unwind: "$details"};

     let ProjectionStage = {$project:{        //প্রজেকশন মানে হচ্ছে, আমি কি কি ডাটা দেখাতে চাই সেটা।
        'brand._id': 0, 
        'category._id': 0, 
        'categoryID': 0,
        'brandID': 0,
    }}

    let data = await ProductModel.aggregate([
        matchStage, 
        joinWithBrandStage, 
        joinWithCategoryStage, 
        joinWithDetailsStage,
        UnwindBrandStage, 
        UnwindCategoryStage, 
        UnwindDetailsStage,
        ProjectionStage,
    ])
     return {status: "success", data: data};


    } catch (err) {
         return {status: "fail", data: err}.toString();
    }
}

export const ReviewListService = async (req) => {
    try {
        const ProductID = new ObjectId(req.params.ProductID);

        const data = await ReviewModel.aggregate([
            { $match: { productID: ProductID } },
            { $lookup: { from: 'profiles', localField: 'userID', foreignField: 'userID', as: 'profile' } },
            { $unwind: '$profile' },
            { $project: { des: 1, rating: 1, 'profile.cus_name': 1 } },
        ]);

        return { status: 'success', data };
    } catch (e) {
        return { status: 'fail', data: e.toString() };
    }
};

export const CreateReviewService = async (req) => {
    try {
        const user_id = req.headers.user_id;
        const reqBody = req.body;

        const data = await ReviewModel.create({
            productID: reqBody.productID,
            userID: user_id,
            des: reqBody.des,
            rating: reqBody.rating,
        });

        return {status: "success", data: data};
    } catch (err) {
        //  return {status: "fail", data: err}.toString();
         return { status: "fail", data: err.toString() };
    }
};

export const ListByFilterService = async (req) => {
    try {
        const matchConditions = {};
        if (req.body.categoryID) {
            matchConditions.categoryID = new ObjectId(req.body.categoryID);
        }
        if (req.body.brandID) {
            matchConditions.brandID = new ObjectId(req.body.brandID);
        }

        const priceMin = parseInt(req.body.priceMin);
        const priceMax = parseInt(req.body.priceMax);

        const priceMatch = {};
        if (!isNaN(priceMin)) priceMatch.numericPrice = { $gte: priceMin };
        if (!isNaN(priceMax)) priceMatch.numericPrice = { ...(priceMatch.numericPrice || {}), $lte: priceMax };

        const data = await ProductModel.aggregate([
            { $match: matchConditions },
            { $addFields: { numericPrice: { $toInt: '$price' } } },
            { $match: priceMatch },
            { $lookup: { from: 'brands', localField: 'brandID', foreignField: '_id', as: 'brand' } },
            { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', as: 'category' } },
            { $unwind: '$brand' },
            { $unwind: '$category' },
            { $project: { 'brand._id': 0, 'category._id': 0, categoryID: 0, brandID: 0 } },
        ]);

        return { status: 'success', data };
    } catch (e) {
        return { status: 'fail', data: e.toString() };
    }
};