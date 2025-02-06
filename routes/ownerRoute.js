const express = require("express")
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("Hello there from owner side");
})
module.exports = router;