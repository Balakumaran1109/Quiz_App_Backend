const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  submittedAnswers: {
    type: Object,
    default: {},
  },
  isSubmitted: {
    type: Object,
    default: {},
  },
});

const Quiz = mongoose.model("quiz", quizSchema);

module.exports = Quiz;
