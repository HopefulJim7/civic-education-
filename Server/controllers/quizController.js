import Quiz from '../models/Quiz.js';

export const createQuiz = async (req, res) => {
  try {
    const { lessonId, questions } = req.body;
    const quiz = await Quiz.create({ lessonId, questions });
    res.status(201).json({ quiz });
  } catch (err) {
    res.status(500).json({ message: 'Quiz creation failed', error: err.message });
  }
};

export const getQuizByLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const quiz = await Quiz.findOne({ lessonId });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json({ quiz });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching quiz', error: err.message });
  }
};