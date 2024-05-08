const express = require("express");
const app = express();

// load config from env file
require("dotenv").config(); //Load environment variables from .env file into the process.env object
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");
// append the todo ApI routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server started Successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();
// default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE Bachho</h1>`);
});
