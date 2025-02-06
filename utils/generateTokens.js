const jwt = require('jsonwebtoken');

const generateToken = (user)=>{
    //returns a unique token
    return jwt.sign({email:user.email, id:user._id}, process.env.JWT_KEY);
};

module.exports = {generateToken};