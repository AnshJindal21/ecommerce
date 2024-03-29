const Product=require("../models/productModel")

//Create product --Admin
exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}
//Get ALL products
exports.getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products
    })
    res.status(200).json({message: "route is working fine"})
}
//Get single product details
exports.getProductDetails=async(req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"

        })
    }
    res.status(200).json({
        success:true,
        product
         
    })
}
//Update Product -- Admin
exports.updateProduct=async(req,res,next) =>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"

        })
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})
    res.status(200).json({
        success:true,
        product
         
    })

}
//Delete product
exports.deleteProduct=async(req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"

        })
    }
    const deletedProduct=await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        message:"Product Deleted Succesfully"
         
    })

}