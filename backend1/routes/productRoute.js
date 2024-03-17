const express=require("express")
const {getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails}=require("../controllers/productcontroller")
const router=express.Router();
//jab /product pe jaenge .get request pe getALLProducts call hoga
router.route("/product").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct)
router.route("/product/:id").delete(deleteProduct).get(getProductDetails)

module.exports=router;