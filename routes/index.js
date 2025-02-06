const express = require("express")
const route = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = require("./usersRoute");

router.get("/", function (req, res){
    let error = req.flash("error");
    res.render("index",{error});
});

router.get("/shop", isLoggedIn, (req, res) =>{
    res.render("shop");
});

module.exports = router;