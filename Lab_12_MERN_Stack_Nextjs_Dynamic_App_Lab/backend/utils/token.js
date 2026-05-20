const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "dev_secret";
const tokenExpiry = "7d";

function generateToken(id) {
  return jwt.sign({ id }, secret, { expiresIn: tokenExpiry });
}

module.exports = { generateToken };
