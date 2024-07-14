import User from "../model/userModel.js";

const uploadProductPermission = async (userId) => {
  const user = await User.findById(userId)
  console.log("user: ", user);

  if (user.role === 'ADMIN') {
    return true
  }

  return false
}

export default uploadProductPermission