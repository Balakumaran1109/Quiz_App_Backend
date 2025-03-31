const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];    

    if (!token) {
      return res.status(401).json({ message: "Not Authorized, please login" });
    }

    // Verify Token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Get user
    const user = await User.findById(verifyToken.id);


    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not Authorized, Please login" });
  }
};

module.exports = protect;
