const express=require("express")
const {getAllProducts}=require("../controllers/productcontroller")
const router=express.Router();
//jab /product pe jaenge .get request pe getALLProducts call hoga
router.route("/product").get(getAllProducts);
module.exports=router;