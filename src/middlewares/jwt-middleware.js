const { jwtVerifyAsync } = require("../lib/jwt");
const { findById } = require("../repository/user.repository");

/**
 * Middleware encargado de extraer el token JWT de las cabeceras
 */
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send();

  const token = req.headers.authorization.split(" ")[1];

  try {
    const { id } = await jwtVerifyAsync(token);
    req.id = id;

    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).send();
  }
};
