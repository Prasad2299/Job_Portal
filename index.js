const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const Port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ping Pong" });
});

app.listen(Port, () => {
  console.log(`Server running on Port:${Port}`);
});
