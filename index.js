const express = require("express");
const routes = require("./routes");
require("dotenv").config();

// Config
const port = process.env.PORT || 5000;

const app = express();
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
