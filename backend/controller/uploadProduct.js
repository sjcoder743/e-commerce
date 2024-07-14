import uploadProductPermission from "../utility/permission.js"
import Product from "../model/productModel.js"

async function UploadProductController(req, res) {
  try {
    const sessionUserId = req.userId

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied")
    }

    const uploadProduct = new Product(req.body)
    const saveProduct = await uploadProduct.save()

    res.status(201).json({
      message: "Product upload successfully",
      error: false,
      success: true,
      data: saveProduct
    })

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    })
  }
}

export default UploadProductController