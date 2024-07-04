import express from "express";
import signUpUser from "../controller/signup.js";
import signInUser from "../controller/signin.js";
import userDetail from "../controller/userDetail.js";
import authToken from "../middleware/authToken.js";
import logOutUser from "../controller/logout.js";
import allUsers from "../controller/allUsers.js";
import updateUser from "../controller/updateUser.js";


const router = express.Router()

// routes
router.post("/signup", signUpUser)
router.post("/signin", signInUser)
router.get("/user-details", authToken, userDetail)
router.get("/logout", logOutUser)

// for admin panel
router.get("/all-users", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

export default router