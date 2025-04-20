import express from 'express';
import Product from '../models/product.model.js'; 
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
})

router.post("/", async (req, res) => {
    const product = req.body;
    // Logic to save product to the database

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "All fields are required" });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }

})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    // Logic to update product in the database

    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ success: false, message: "Invalid product ID" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in updating product:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    // Logic to delete product from the database

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in deleting product:", error.message);
        res.status(404).json({ success: false, message: error.message });
    }
})

export default router;