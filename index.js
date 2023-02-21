require("dotenv").config();
require("./config/db");

const express = require("express");
const app = express();
const PORT = "3000" || process.env.PORT;

// global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use("/api", require("./router/addTokenData"));

// index Route
app.get("/", function (req, res) {
  res.status(200).json({ msg: "bacend working successfully" });
});

// undefinied Routes
app.get("*", function (req, res) {
  res.status(404).json({ msg: "404 not found" });
});

// listening PORT
app.listen(PORT, "0.0.0.0", () => {
  console.log("server running seucesfully");
});
