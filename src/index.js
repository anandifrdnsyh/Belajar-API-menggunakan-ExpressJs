require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const mysql = require("mysql2");

const productRoutes = require("./routes/products.js");

const middlewareLogRequest = require("./middleware/log.js");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
});
