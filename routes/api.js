import express from "express";
import { CreateReview, ProductBrandList, ProductCategoryList, ProductDetails, ProductListByBrand, ProductListByCategory, ProductListByFilter, ProductListByKeyword, ProductListByRemark, ProductListBySmilier, ProductReviewList, ProductSliderList } from "../src/controllers/ProductController.js";
import { UserOTP } from "../src/controllers/UserController.js";


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
router.get('/ProductReviewList/:ProductID', ProductReviewList)

router.post('/CreateReview', CreateReview);
router.post('/ProductListByFilter', ProductListByFilter);

// User
router.get('/UserOTP/:email', UserOTP);

// router.get('/VerifyLogin/:email/:otp',);
// router.get('/UserLogout',AuthVerification,"");
// router.get('/ReadProfile',AuthVerification,"");
// router.get('/CreateProfile',AuthVerification,"");
// router.get('/UpdateProfile',AuthVerification,"");

// WishList
// router.get('/SaveWishList',AuthVerification,"");
// router.get('/RemoveWishList',AuthVerification,"");
// router.get('/WishList',AuthVerification,"");

// Cart
// router.get('/SaveCartList',AuthVerification,"");
// router.get('/UpdateCartList',AuthVerification,"");
// router.get('/RemoveCartList',AuthVerification,"");
// router.get('/CartList',AuthVerification,"");


export default router;
