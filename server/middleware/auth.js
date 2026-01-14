// middleware/auth.js
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization; // ✅ correct

  if (!authHeader) {
    return res.status(401).json({ msg: "No token" });
  }

  const token = authHeader.split(" ")[1]; // ✅ Bearer TOKEN

  try {
    req.user = jwt.verify(token, JWT);
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
