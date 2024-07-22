import Product from "../../model/productModel.js";
import logger from "../../utility/logger.js";

const getProductCategory = async (req, res) => {
  try {
    const productCat = await Product.distinct('category')
    console.log("Category: ", productCat);

    // Array to store one product from each category
    const productByCategory = []

    for (const category of productCat) {
      const product = await Product.findOne({ category })
      if (product) {
        productByCategory.push(product)
      }
    }

    res.json({
      message: "Product Category",
      success: true,
      data: productByCategory,
      error: false,
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

export default getProductCategory