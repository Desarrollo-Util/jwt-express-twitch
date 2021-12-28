const { Router: expressRouter } = require("express");
const usersDB = require("../constants/users");

const router = expressRouter();

/**
 * Devuelve los datos del usuario a partir del token JWT que se obtiene de los Headers.
 */
router.get("/profile", async (req, res) => {
  const { id } = req;
  // Este find sería el equivalente a buscar al usuario en la BD
  const userFound = usersDB.find((user) => user.id === id);

  if (userFound) {
    const { id, name, email } = userFound;

    return res.send({ id, name, email });
  }
});

module.exports = router;
