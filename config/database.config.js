// Import packages
const mysql = require("mysql");

// Configure your MySQL connection settings
const client = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = client;
