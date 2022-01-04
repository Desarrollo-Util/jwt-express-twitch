const { findById } = require("../repository/user.repository");

module.exports = (id, res) => {
  /**
   * Este find sería el equivalente a buscar al usuario en la BD
   *
   * Sólo nos interesa el ID porque sólo estamos comprobando
   * si el usuario existe o no
   */
  const userFound = findById(id);

  if (!userFound) return res.status(401).send();
};
