const { jwtVerifyAsync } = require("../lib/jwt");
const { findById } = require("../repository/user.repository");

/**
 * Middleware encargado de autenticar al usuario
 */
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send();

  const token = req.headers.authorization.split(" ")[1];

  try {
    const { id } = await jwtVerifyAsync(token);
    req.id = id;

    /**
     * Este find sería el equivalente a buscar al usuario en la BD
     *
     * Sólo nos interesa el ID porque sólo estamos comprobando
     * si el usuario existe o no
     */
    const userFound = findById(id);

    if (!userFound) return res.status(401).send();

    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).send();
  }
};
