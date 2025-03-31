const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  // Generate token
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
  };

  try {
    const { userName, selectedQuiz } = req.body;

    const user = await User.create({ userName, selectedQuiz });

    const token = generateToken(user._id);

    if (user) {
      const { _id, userName, selectedQuiz } = user;
      res.status(201).json({
        _id,
        userName,
        selectedQuiz,
        token,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid User data, Please try again" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      const { _id, userName, selectedQuiz, token } = user;
      res.status(201).json({
        _id,
        userName,
        selectedQuiz,
        token,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error! Please try again" });
  }
};

module.exports = {
  registerUser,
  getUserDetails,
};
