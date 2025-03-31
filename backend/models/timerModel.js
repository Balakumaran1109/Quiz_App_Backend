const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  remainingTime: { type: Number, required: true },
});

const Timer = mongoose.model("Timer", timerSchema);

module.exports = Timer;
