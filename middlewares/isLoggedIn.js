const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user-model");

module.exports = async (req, res, next) => {
    if(!req){
        req.flash("error","You need to login first");
        return res.redirect("/");
    }
    
    try {
        let decode = jwt.verify(req.cookie.token, process.env.JWT_KEY);
        let user = await userModel.findOne({email: decode.email}).select("-password");//excludes password field

        req.user = user;
        
        next();
    } catch (error) {
        req.flash("error","something went wrong");
        res.redirect("/");
    }
};