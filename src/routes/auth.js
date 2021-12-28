const { jwtSignAsync } = require("../lib/jwt");
const { Router: expressRouter } = require("express");
const usersDB = require("../constants/users");
const { join } = require("path");

const router = expressRouter();

router.get("/login", (req, res) => {
  res.sendFile(join(__dirname, "../../public/index.html"));
});

/**
 * Devuelve el token JWT si el usuario y la contraseña son correctos. En caso contrario, devuelve un 401 (Unathorized)
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Este find sería el equivalente a buscar al usuario en la BD
  const userFound = usersDB.find((user) => user.email === email);

  if (userFound && userFound.password === password) {
    try {
      const token = await jwtSignAsync(
        { id: userFound.id },
        { algorithm: "HS512", expiresIn: "1d" }
      );
      return res.send({ token });
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  }

  return res.status(401).send();
});

module.exports = router;
