const { sign, verify } = require("jsonwebtoken");

const jwtSignAsync = (payload, options) => {
  return new Promise((resolve, reject) => {
    sign(payload, PRIVATEKEY, options, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
};

const jwtVerifyAsync = (token) => {
  return new Promise((resolve, reject) => {
    return verify(token, PRIVATEKEY, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};

module.exports = {
  jwtSignAsync,
  jwtVerifyAsync,
};
