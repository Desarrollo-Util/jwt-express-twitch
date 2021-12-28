const { sign, verify } = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "default_secret_key";

const jwtSignAsync = (payload, options) => {
  return new Promise((resolve, reject) => {
    sign(payload, jwtSecret, options, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
};

const jwtVerifyAsync = (token) => {
  return new Promise((resolve, reject) => {
    return verify(token, jwtSecret, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};

module.exports = {
  jwtSignAsync,
  jwtVerifyAsync,
};
