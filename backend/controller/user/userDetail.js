import User from "../../model/userModel.js";

async function userDetail(req, res) {
  try {
    console.log("user id: ", req.userId);
    const user = await User.findById(req.userId)

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details fetch successfully"
    })

    console.log("User : ", user);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false
    })
  }
}

export default userDetail