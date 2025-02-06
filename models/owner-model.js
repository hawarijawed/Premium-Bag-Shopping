const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema(
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
        products:[],
        profilePicture: String,
        gstin:String,

    }
);

const ownerModel = mongoose.model("owner", ownerSchema);

module.exports = {
    ownerModel,
}