const { Router: expressRouter } = require("express");
const { findById } = require("../repository/user.repository");
const authMiddleware = require("../middlewares/auth-middleware");

const router = expressRouter();

router.use(authMiddleware);

/**
 * Devuelve los datos del usuario a partir del token JWT que se obtiene de los Headers.
 */
router.get("/profile", async (req, res) => {
  const { id: reqId } = req;

  const userFound = findById(reqId);

  if (!userFound) return res.status(401).send();

  const { id, name, email } = userFound;

  return res.send({ id, name, email });
});

module.exports = router;
