const usersDB = require("../constants/users");

/**
 * Finds a user by ID
 * @param {*} id User ID
 * @returns User or null
 */
const findById = (id) => {
  return usersDB.find((user) => user.id === id) || null;
};

/**
 * Finds a user by email
 * @param {*} email User email
 * @returns User or null
 */
const findByEmail = (email) => {
  return usersDB.find((user) => user.email === email) || null;
};

/**
 * Create a user
 * @param {*} user User
 */
const create = (user) => {
  const existingUserById = findById(user.id);
  if (existingUserById) throw new Error("El id de usuario ya existe");

  const existingUserByEmail = findByEmail(user.email);
  if (existingUserByEmail) throw new Error("El email de usuario ya existe");

  // Validar el resto de restricciones de base de datos del usuario.//#endregion
  // Ej. Si es SQL, validar que el user cumpla con el esquema.

  usersDB.push(user);
};

/**
 * Updates a user
 * @param {*} user User
 */
const update = (user) => {
  throw new Error("Not implemented");
};

/**
 * Deletes a user by ID
 * @param {*} id User ID
 */
const deleteById = (id) => {
  throw new Error("Not implemented");
};

module.exports = { findById, findByEmail, create, update, deleteById };
