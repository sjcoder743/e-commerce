import Product from "../../model/productModel.js";
import logger from "../../utility/logger.js";

const getProduct = async (req, res) => {
  try {
    const allProduct = await Product.find().sort({ createdAt: -1 });
    res.json({
      message: "All Product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (error) {
    logger.error(error);
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export default getProduct;
