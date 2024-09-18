const router = require("express").Router();

// Product routes
router.use("/product", require("./product.route"));

module.exports = router;
