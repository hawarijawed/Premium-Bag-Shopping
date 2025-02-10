const express = require('express');
const multer  = require('multer');
const storage = multer.memoryStorage(); // Use memory storage to store files as buffer
const upload = multer({ storage: storage });
const {productModel} = require('../models/product-model');
const router = express.Router();

router.post('/create', upload.single("image"), async (req, res) => {
    try {
        let { product_name, product_price, discount, bgColor, panelColor, textColor } = req.body;

        // Validate required fields
        if (!product_name || !product_price) {
            return res.status(400).send({ error: "Product name and price are required" });
        }

        // Ensure product_price is a valid number
        if (isNaN(product_price)) {
            return res.status(400).send({ error: "Product price must be a valid number" });
        }

        let product = await productModel.create({
            image: req.file.buffer, // Store image as buffer in memory
            product_name,
            product_price,
            discount,
            bgColor,
            panelColor,
            textColor,
        });

        req.flash("success","Product created successfully");
        res.redirect('./owners/admin');
    } catch (err) {
        console.error(err);  // Log the error for debugging
        res.status(500).send({ error: "Failed to create product" });
    }
});

module.exports = router;
