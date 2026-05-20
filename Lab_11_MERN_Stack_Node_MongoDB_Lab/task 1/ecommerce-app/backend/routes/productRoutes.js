const express = require("express");
const Product = require("../models/Product");
const products = require("../data/products");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Product.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.post("/seed", async (req, res) => {
  try {
    await Product.deleteMany({});
    const created = await Product.insertMany(products);
    res.json({ count: created.length, items: created });
  } catch (err) {
    res.status(500).json({ message: "Failed to seed products" });
  }
});

module.exports = router;
