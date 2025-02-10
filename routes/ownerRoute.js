const express = require("express")
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("Hello there from owner side");
});

router.get("/admin", (req, res)=>{
    let sucess = req.flash("sucess");
    res.render("createproducts",{sucess});
})
module.exports = router;