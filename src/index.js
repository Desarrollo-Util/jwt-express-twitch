const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

require("dotenv").config();

const bootstrap = () => {
  // Config
  const port = process.env.PORT || 5000;

  const app = express();

  //Middlewares
  app.use(express.json());

  //Routes
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);

  //Startup
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

bootstrap();
