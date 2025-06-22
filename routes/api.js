import express from "express";
import { ProductBrandList, ProductCategoryList, ProductDetails, ProductListByBrand, ProductListByCategory, ProductListByKeyword, ProductListByRemark, ProductListBySmilier, ProductSliderList } from "../src/controllers/ProductController.js";


const router = express.Router();

router.get('/ProductBrandList', ProductBrandList);
router.get('/ProductCategoryList', ProductCategoryList);
router.get('/ProductSliderList', ProductSliderList);
router.get('/ProductListByBrand/:brandID', ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID', ProductListByCategory);

router.get('/ProductListBySmilier/:CategoryID', ProductListBySmilier);
router.get('/ProductListByKeyword/:KeywordID', ProductListByKeyword);
router.get('/ProductListByRemark/:RemarkID', ProductListByRemark);
router.get('/ProductDetails/:ProductID', ProductDetails);

export default router;
