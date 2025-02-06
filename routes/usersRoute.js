const express = require("express");
const {registerUser, loginUser,userLogOut} = require('../controllers/authControllers')
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("Hello there from user side");
})
router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/logout', userLogOut)
module.exports = router;