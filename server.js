// server.js
const express = require("express");
const connectToDatabase = require("./config/database");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const productRoutes = require("./src/routes/productRoutes");

// dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI;
const userRoutes = require("./src/routes/userRoutes");
const authMiddleware = require("./src/middlewares/authMiddleware");

app.use("/users", userRoutes);

// Middleware
app.use(express.json());
connectToDatabase();

// Connect to MongoDB
// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//     process.exit(1);
//   });

  
// Routes
app.use("/products", authMiddleware, productRoutes);
app.use("/users", userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});