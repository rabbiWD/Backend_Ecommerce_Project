import { BrandListService, CategoryListService, DetailsService, ListByBrandService, ListByCategoryService, ListByKeywordService, ListByRemarkService, ListBySimilierService, SliderListService } from "../services/ProductService.js"

export const ProductBrandList = async(req, res)=>{
    let result = await BrandListService();
    return res.status(200).json(result);
}

export const ProductCategoryList = async(req, res)=>{
    let result = await CategoryListService();
    return res.status(200).json(result);
}

export const ProductSliderList = async(req, res)=>{
    let result = await SliderListService();
    return res.status(200).json(result);
}

export const ProductListByBrand = async(req, res)=>{
    let result = await ListByBrandService(req);
    return res.status(200).json(result);
}

export const ProductListByCategory = async(req, res)=>{
    let result = await ListByCategoryService(req);
    return res.status(200).json(result);
}

export const ProductListBySmilier = async(req, res)=>{
    let result = await ListBySimilierService(req);
    return res.status(200).json(result);
}

export const ProductListByKeyword = async(req, res)=>{
    let result = await ListByKeywordService(req);
    return res.status(200).json(result);
}

export const ProductListByRemark = async(req, res)=>{
    let result = await ListByRemarkService(req);
    return res.status(200).json(result);
}

export const ProductDetails = async(req, res)=>{
    let result = await DetailsService(req);
    return res.status(200).json(result);
}