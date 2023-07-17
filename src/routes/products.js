const express = require("express");

const ProductController = require("../controller/products.js");

const router = express.Router();

//  CREATE - POST
router.post("/", ProductController.createNewProduct);

// GET - DATA
router.get("/", ProductController.getAllProduct);

// UPDATE - Data(PATCH)
router.patch("/:id", ProductController.updateProduct);

// DELETE - DATA
router.delete("/:id", ProductController.deleteProduct);

//SEARCH - DATA
router.get("/:name", ProductController.searchProduct);

module.exports = router;
