const Quiz = require("../models/quizModel");

// Save user details to Quiz Model
const startQuiz = async (req, res) => {
  try {
    const userId = req.user._id;

    let quiz = await Quiz.findOne({ userId });

    if (!quiz) {
      quiz = Quiz({ userId });
      await quiz.save();
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server Error", err: error.message });
  }
};

// Save Quiz to DB
const saveQuiz = async (req, res) => {
  try {
    const quizData = req.body.quizData;
    const { submittedAnswers, isSubmitted } = quizData;
    const userId = req.user._id;

    if (submittedAnswers && isSubmitted) {
      const newQuiz = await Quiz.findOneAndUpdate(
        { userId },
        { submittedAnswers, isSubmitted },
        { upsert: true, new: true }
      );

      res.status(201).json({ message: "Quiz Saved", id: newQuiz._id, newQuiz });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", err: error.message });
  }
};

// Get Quiz from DB
const getQuiz = async (req, res) => {
  try {
    const userId = req.user._id;    

    const quiz = await Quiz.findOne({ userId });

    res.json({ userQuiz: quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveQuiz,
  startQuiz,
  getQuiz,
};
