import express from "express";
import { ProductBrandList, ProductCategoryList } from "../src/controllers/ProductController.js";


const router = express.Router();

router.get('/productBrandList', ProductBrandList)
router.get('/productCategoryList', ProductCategoryList)

export default router;
