const { userModel } = require("../models/user-model");
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/generateTokens')
const flash = require("connect-flash");


module.exports.registerUser = async function (req, res){
    try {
        let {fullName, email, password,contact} = req.body;
        
        //Varify if user already exists or not
        let user_exists = await userModel.findOne({email:email});
        if(user_exists){
            return res.status(409).send("Email already registered in database");
        }
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if(err) return res.send(err.message);
                else{
                    const user = await userModel.create({
                        fullName,
                        email,
                        password:hash,
                        contact,
                    });

                    let token = generateToken(user);
                    res.cookie("token", token);
                    req.flash("success","user created successfully");
                    res.redirect("/");
                }
            })
        })

    } catch (error) {
        res.send(error.message);
        
    }
};

module.exports.loginUser = async function (req, res) {
    let {email, password} = req.body;

    const user = await userModel.findOne({email:email});
    
    //If user not found
    if(!user){ 
        req.flash("User not found");
        return res.redirect("/login");
    }
    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/index/shop");
        }
        else{
            req.flash("Invalid Login Credentials");
        }
    });

};

module.exports.userLogOut = function name(req, res) {
    res.cookie("token","");
    res.redirect("/");
}