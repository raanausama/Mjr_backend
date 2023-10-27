const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_name) {
  const payload = {
    user: user_name,
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;
