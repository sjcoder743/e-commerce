function logOutUser(req, res) {
  try {
    if (req.cookies.token) {
      res.clearCookie("token");
    }

    return res.status(200).json({
      message: "User logOut successful",
      error: false,
      success: true,
      data: []
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      error: true,
      success: false
    });
  }
}

export default logOutUser;