const express = require("express")
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const flash = require("connect-flash");
const {productModel} = require('../models/product-model')
router.get("/", function (req, res){
    let error = req.flash("error");
    res.render("index",{error});
});

//Once final product is ready add isLoggedIn middleware here
router.get("/shop", async (req, res) =>{
    let products = await productModel.find({});
    res.render("shop",{products});
});

module.exports = router;