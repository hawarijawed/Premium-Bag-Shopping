const express = require("express");
const {registerUser, loginUser,userLogOut} = require('../controllers/authControllers')
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('/');
})
router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/logout', userLogOut);
router.get('/login', (req, res)=>{
    res.render('admin');
});

router.get('/register', (req, res)=>{
    res.render('index');
});
module.exports = router;