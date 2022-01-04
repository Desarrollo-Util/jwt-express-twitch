const express = require("express");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const cors = require("cors");

require("dotenv").config();

const bootstrap = () => {
  // Config
  const port = process.env.PORT || 5000;

  const app = express();

  //Middlewares
  app.use(express.json());
  app.use(
    cors({
      origin: process.env.CORS_DOMAIN || "*",
    })
  );

  //Routes
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);

  //Startup
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
};

bootstrap();
