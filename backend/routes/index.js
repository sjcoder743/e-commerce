import express from "express";
import signUpUser from "../controller/user/signup.js";
import signInUser from "../controller/user/signin.js";
import userDetail from "../controller/user/userDetail.js";
import authToken from "../middleware/authToken.js";
import logOutUser from "../controller/user/logout.js";
import allUsers from "../controller/user/allUsers.js";
import updateUser from "../controller/user/updateUser.js";
import UploadProductController from "../controller/product/uploadProduct.js";
import getProduct from "../controller/product/getProduct.js";
import updateProduct from "../controller/product/updateProduct.js";


const router = express.Router()

// routes
router.post("/signup", signUpUser)
router.post("/signin", signInUser)
router.get("/user-details", authToken, userDetail)
router.get("/logout", logOutUser)

// for admin panel
router.get("/all-users", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

// product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProduct)
router.post("/update-product", authToken, updateProduct)

export default router