const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend La Lunarcaster Cafe is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});