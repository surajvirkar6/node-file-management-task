const express = require("express");
const cors = require("cors");
const fileRoutes = require("./routes/file.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// sample get
app.get("/", (req, res, next) => {
  res.status(200).json({ status: true, message: "Welcome to Backend!!" });
});

// main routes
app.use("/file", fileRoutes);

module.exports = app;
