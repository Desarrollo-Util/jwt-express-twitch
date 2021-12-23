const express = require("express");
const jwtRoutes = require("./routes/auth");
require("dotenv").config();

// Config
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/auth", jwtRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
