import uploadProductPermission from "../utility/permission.js";
import logger from "../utility/logger.js";
import productModel from "../model/productModel.js"
async function updateProduct(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission denied")
    }
    const { _id, ...resBody } = req.body

    const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)
    res.json({
      message: "Product update successfully",
      data: updateProduct,
      success: true,
      error: false
    })
  } catch (error) {
    logger.error(error);
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export default updateProduct