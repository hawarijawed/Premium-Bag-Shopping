const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type:String,
            required: true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },

        cart:[],
        order:[],
        
        contact:{
            type:Number,
            required:true,
        },
        
        profilePicture: String,

    }
);

const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel,
}