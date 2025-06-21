import express from "express";
import { ProductBrandList } from "../src/controllers/ProductController.js";


const router = express.Router();

router.get('/productBrandList', ProductBrandList)

export default router;
