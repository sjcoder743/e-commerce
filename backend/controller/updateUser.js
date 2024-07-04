import userModel from "../model/userModel.js"

async function updateUser(req, res) {
  try {
    const userSession = req.userId
    const { userId, email, name, role } = req.body
    const payLoad = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    }
    const user = await userModel.findById(userSession)
    console.log("user.role is: ", user.role);
    const updateUserRole = await userModel.findByIdAndUpdate(userId, payLoad)
    return res.json({
      message: "user updated successfully",
      data: updateUserRole,
      error: false,
      success: true
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
export default updateUser