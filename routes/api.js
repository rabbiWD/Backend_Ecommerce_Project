import express from "express";
import { CreateReview, ProductBrandList, ProductCategoryList, ProductDetails, ProductListByBrand, ProductListByCategory, ProductListByFilter, ProductListByKeyword, ProductListByRemark, ProductListBySmilier, ProductReviewList, ProductSliderList } from "../src/controllers/ProductController.js";
import { CreateProfile, ReadProfile, UpdateProfile, UserLogout, UserOTP, VerifyLogin } from "../src/controllers/UserController.js";
import { AuthVerification } from "../src/middlewares/AuthVerification.js";


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

router.get('/VerifyLogin/:email/:otp', VerifyLogin);
router.get('/UserLogout',AuthVerification,UserLogout);
router.post('/ReadProfile',AuthVerification,CreateProfile);
router.get('/CreateProfile',AuthVerification, ReadProfile);
router.put('/UpdateProfile',AuthVerification, UpdateProfile);

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
