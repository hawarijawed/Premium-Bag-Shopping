const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user-model");
const flash = require("connect-flash");

module.exports = async (req, res, next) => {
    if (!req.cookies || !req.cookies.token) {
        req.flash("error", "You need to login first");
        return res.redirect("/");
    }

    try {
        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({ email: decode.email }).select("-password"); // excludes password field

        req.user = user;
        
        next();
    } catch (error) {
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
};
