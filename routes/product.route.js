// Import packages
const router = require("express").Router();

// Import controllers
const { productController } = require("../controllers");

// ROUTE: Get products
router.get("/", productController.getProducts);

module.exports = router;
