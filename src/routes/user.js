const { Router: expressRouter } = require("express");
const usersDB = require("../constants/users");
const authMiddleware = require("../middlewares/auth-middleware");

const router = expressRouter();

router.use(authMiddleware);

/**
 * Devuelve los datos del usuario a partir del token JWT que se obtiene de los Headers.
 */
router.get("/profile", async (req, res) => {
  const { id } = req;

  const userFound = usersDB.find((user) => user.id === id);

  if (!userFound) return res.status(401).send();

  const { id, name, email } = userFound;

  return res.send({ id, name, email });
});

module.exports = router;
