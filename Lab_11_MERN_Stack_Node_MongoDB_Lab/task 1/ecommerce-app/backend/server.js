const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { MongoMemoryServer } = require("mongodb-memory-server");

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ecommerce_lab";

async function connectDatabase() {
  if (process.env.USE_MEMORY_DB === "true") {
    const memoryServer = await MongoMemoryServer.create();
    const memoryUri = memoryServer.getUri();
    await mongoose.connect(memoryUri);
    console.log("MongoDB memory server connected");
    return;
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");
}

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;
connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
