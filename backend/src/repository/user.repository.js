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

module.exports = { findById, findByEmail };
