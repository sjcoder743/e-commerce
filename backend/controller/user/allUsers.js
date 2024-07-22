import userModel from "../../model/userModel.js"

async function allUsers(req, res) {
  try {
    console.log("All users : ", req.userId);
    const allUser = await userModel.find()
    return res.json({
      message: "All users",
      success: true,
      data: allUser,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export default allUsers;
