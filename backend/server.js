const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  registerUser,
  getUserDetails,
} = require("./controllers/userController");
const protect = require("./middleware/authMiddleware");
const {
  getTimer,
  updateTimer,
  startTimer,
} = require("./controllers/timerController");
const {
  saveQuiz,
  startQuiz,
  getQuiz,
} = require("./controllers/quizController");
const dotenv = require("dotenv").config();

const app = express();
const router = express.Router();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  res.send("Server Working");
});

// Routes
router.post("/users/registeruser", registerUser);
router.get("/users/getuserdetails", protect, getUserDetails);
router.post("/timer/starttimer", protect, startTimer);
router.get("/timer/gettimer", protect, getTimer);
router.put("/timer/updatetimer", protect, updateTimer);
router.post("/quiz/startquiz", protect, startQuiz);
router.post("/quiz/savequiz", protect, saveQuiz);
router.get("/quiz/getquiz", protect, getQuiz);
// router.put("/timer/updatetimer/:id", protect, updateTimer);

// Connect to DB
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on PORT : " + PORT);
    });
  })
  .catch((err) => console.log(err));
