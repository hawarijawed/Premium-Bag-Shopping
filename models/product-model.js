const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image: String,
    product_name:{
        type:String,
        required:true,
    },
    product_price:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        default:0,
    },
    bgColor:String,
    panelColor:String,
    textColor:String,
    
});

const productModel = mongoose.model("Product", productSchema);

module.exports = {
    productModel,
}