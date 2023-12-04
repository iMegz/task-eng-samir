require("dotenv").config();
const { join } = require("path");
const cors = require("cors");
const express = require("express");
const router = require("./src/routes");

const app = express();

// Handle cors
app.use(cors());

// Parse JSON
app.use(express.json());

// Serve react app
app.use(express.static(join(__dirname, "public")));

app.use("/api", router);

app.use((error, req, res, next) => {
  res.status(err.status || 500).json({ error });
});

app.listen(process.env.PORT || 4000, () => console.log("Server started"));
