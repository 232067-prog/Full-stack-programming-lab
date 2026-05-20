const { connectDatabase, disconnectDatabase } = require("./config/db");
const User = require("./models/User");
const Category = require("./models/Category");
const Product = require("./models/Product");
const Order = require("./models/Order");
const users = require("./data/seedUsers");
const categories = require("./data/seedCategories");
const products = require("./data/seedProducts");

async function seedDatabase() {
  try {
    await connectDatabase();

    await Order.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});

    const createdUsers = [];
    for (const user of users) {
      const created = await User.create(user);
      createdUsers.push(created);
    }
    const createdCategories = await Category.insertMany(categories);

    const categoryMap = new Map(
      createdCategories.map((category) => [category.slug, category._id])
    );

    const productsWithCategory = products.map((product) => ({
      ...product,
      category: categoryMap.get(product.categorySlug) || undefined
    }));

    await Product.insertMany(productsWithCategory);

    console.log(`Seeded ${createdUsers.length} users`);
    console.log(`Seeded ${createdCategories.length} categories`);
    console.log(`Seeded ${productsWithCategory.length} products`);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exitCode = 1;
  } finally {
    await disconnectDatabase();
  }
}

seedDatabase();
