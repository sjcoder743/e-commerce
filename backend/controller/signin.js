import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Secret key for JWT
const secretKey = process.env.JWT_SECRET || "jkhsadkjlhsdjlu98y49kjsd";

async function signInUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide all fields",
        error: true,
        success: false,
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found with given email",
        error: true,
        success: false,
      });
    }

    // Check if password matches
    const checkPassword = await bcrypt.compare(password, user.password);
    console.log("check password: ", checkPassword);
    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 8,
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check Password");
    }

    // Respond with the token
    res.status(200).json({
      message: "Login successful",
      data: token,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log("Error of user: ", error.message);
    res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

export default signInUser;