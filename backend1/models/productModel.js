const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"]
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"please cannot exceed 8 digits "]
    },
    rating:{
        type:Number,
        default:0
    },
    //images main publicid hogi aur url which will come if we host this in cloud 9
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
            type:String,
            required:[true,"please enter product category "]
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"please cannot exceed 8 digits "],
        default:1
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:[true,"please enter product name"]
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }    
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }


})
module.exports=mongoose.model("Product",productSchema)