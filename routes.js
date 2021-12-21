const { jwtSignAsync, jwtVerifyAsync } = require("./jwt");

const jwtSecret = process.env.JWT_SECRET || "default_secret_key";

module.exports = (app) => {
  app.get("/sign", async (req, res) => {
    try {
      const token = await jwtSignAsync(
        { id: "elIdSuperUnico" },
        { algorithm: "HS512", expiresIn: "20s" }
      );
      return res.send(token);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  app.get("/decode", async (req, res) => {
    try {
      const decodedToken = await jwtVerifyAsync(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      );
      return res.send(decodedToken);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  return app;
};
