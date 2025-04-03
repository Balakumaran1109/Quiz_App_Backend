const Timer = require("../models/timerModel");

// Save Timer to DB
const startTimer = async (req, res) => {
  try {
    const { userData } = req.body;

    const userId = req.user._id;

    let userTimer = await Timer.findOne({ userId });

    if (!userTimer) {
      userTimer = await Timer({ userId, remainingTime: userData });
      await userTimer.save();
    }

    res.status(201).json({ message: "Timer Saved", userTimer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Timer from DB
const getTimer = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    let timer = await Timer.findOne({ userId });

    if (!timer) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    res.json({ remainingTime: timer.remainingTime });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again" });
  }
};


// Update Remaining Time to DB
const updateTimer = async (req, res) => {
  try {
    const { remainingTime } = req.body;
    const userId = req.user._id;

    const updateTimer = await Timer.findOneAndUpdate(
      { userId },
      {
        remainingTime,
      },
      { new: true }
    );
    if (!updateTimer) {
      return res.status(404).json({ message: "Timer not found" });
    }
    res.json({
      message: "Timer Updated",
      remainingTime: updateTimer.remainingTime,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  startTimer,
  getTimer,
  updateTimer,
};
