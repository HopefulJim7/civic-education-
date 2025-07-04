import User from '../models/User.js';

export const updateProgress = async (req, res) => {
  try {
    const { lessonId, quizScore } = req.body;
    const userId = req.user.id;

    await User.findByIdAndUpdate(userId, {
      $push: {
        progress: {
          lessonId,
          quizScore,
          completedAt: new Date()
        }
      }
    });

    res.status(200).json({ message: 'Progress updated!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update progress', error: err.message });
  }
};