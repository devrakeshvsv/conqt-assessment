// Access environment variables
require("dotenv").config();

// Import packages
const express = require("express");

// Initialize express app
const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize routes
app.use("/", require("./routes"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App Started: http://localhost:${port}`);
});
