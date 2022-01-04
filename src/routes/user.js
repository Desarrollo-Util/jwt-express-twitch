const { Router: expressRouter } = require("express");
const { findById } = require("../repository/user.repository");
const jwtMiddleware = require("../middlewares/jwt-middleware");
const authUser = require("../lib/auth-user");

const router = expressRouter();

router.use(jwtMiddleware);

/**
 * Devuelve los datos del usuario a partir del token JWT que se obtiene de los Headers.
 */
router.get("/profile", async (req, res) => {
  const { id: reqId } = req;

  authUser(reqId, res);

  const userFound = findById(reqId);

  if (!userFound) return res.status(401).send();

  const { id, name, email } = userFound;

  return res.send({ id, name, email });
});

module.exports = router;
