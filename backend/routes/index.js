import express from "express";
import signUpUser from "../controller/signup.js";
import signInUser from "../controller/signin.js";
import userDetail from "../controller/userDetail.js";
import authToken from "../middleware/authToken.js";


const router = express.Router()

// routes
router.post("/signup", signUpUser)
router.post("/signin", signInUser)
router.get("/user-details", authToken, userDetail)

export default router