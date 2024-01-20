// app.js

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

// Middleware to parse JSON data in requests
app.use(bodyParser.json());

// Define routes

// GET route to fetch data
app.get("/api/get", (req, res) => {
  res.json(data);
});

// POST route to add data
app.post("/api/post", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json({ message: "Data added successfully", data: newData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
