import User from "../model/userModel.js";
import bcrypt from "bcryptjs";

async function signUpUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are provided
    if (!email || !name || !password) {
      return res.status(400).json({
        message: "Please provide all fields",
        error: true,
        success: false
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
        error: true,
        success: false
      });
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create user payload
    const payLoad = {
      ...req.body,
      password: hashedPassword,
      role: "GENERAL"
    };

    // Save user data
    const userData = new User(payLoad);
    const savedUser = await userData.save();

    return res.status(201).json({
      data: savedUser,
      error: false,
      success: true,
      message: "User created successfully"
    });
  } catch (error) {
    console.log("Error of user: ", error.message);
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false
    });
  }
}
export default signUpUser;
