const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search, category, featured, page = 1, limit = 12, all } = req.query;
    const filter = {};

    if (all !== "true") {
      filter.isActive = true;
    }

    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    if (featured === "true" || featured === "1") {
      filter.featured = true;
    }

    if (category) {
      if (mongoose.Types.ObjectId.isValid(category)) {
        filter.category = category;
      } else {
        const categoryDoc = await Category.findOne({ slug: category });
        if (categoryDoc) {
          filter.category = categoryDoc._id;
        }
      }
    }

    const safeLimit = Math.min(Number(limit) || 12, 48);
    const safePage = Math.max(Number(page) || 1, 1);
    const skip = (safePage - 1) * safeLimit;

    const [items, count] = await Promise.all([
      Product.find(filter)
        .populate("category", "name slug")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(safeLimit),
      Product.countDocuments(filter)
    ]);

    res.json({
      items,
      count,
      page: safePage,
      pages: Math.ceil(count / safeLimit)
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.get("/slug/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).populate(
      "category",
      "name slug"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name slug"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const data = req.body || {};
    const categoryId = await resolveCategoryId(data.category);

    const product = await Product.create({
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
      category: categoryId,
      tags: data.tags || [],
      featured: Boolean(data.featured),
      rating: data.rating || 4.5,
      countInStock: data.countInStock || 0,
      isActive: data.isActive !== false
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
});

router.put("/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const data = req.body || {};
    const categoryId = await resolveCategoryId(data.category);

    product.name = data.name ?? product.name;
    product.description = data.description ?? product.description;
    product.price = data.price ?? product.price;
    product.imageUrl = data.imageUrl ?? product.imageUrl;
    product.category = categoryId || product.category;
    product.tags = data.tags ?? product.tags;
    product.featured = data.featured ?? product.featured;
    product.rating = data.rating ?? product.rating;
    product.countInStock = data.countInStock ?? product.countInStock;
    product.isActive = data.isActive ?? product.isActive;

    const updated = await product.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
});

router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});

async function resolveCategoryId(category) {
  if (!category) {
    return null;
  }
  if (mongoose.Types.ObjectId.isValid(category)) {
    return category;
  }
  const doc = await Category.findOne({ slug: category });
  return doc ? doc._id : null;
}

module.exports = router;
