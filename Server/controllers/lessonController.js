import Lesson from '../models/Lesson.js';
import { generateLessonFromTopic } from '../utils/lessonGenerator.js';

// POST /api/lessons/generate
export const generateLesson = async (req, res) => {
  try {
    const { topic } = req.body;
    const userId = req.user?.id;

    if (!topic) {
      return res.status(400).json({ message: 'Topic required' });
    }

    const content = await generateLessonFromTopic(topic);

    const newLesson = await Lesson.create({
      topic,
      content,
      userId
    });

    res.status(201).json({ lesson: newLesson });
  } catch (err) {
    console.error('Lesson generation error:', err.message);
    res.status(500).json({
      message: 'Lesson generation failed',
      error: err.message
    });
  }
};

// GET /api/lessons
export const getAllLesson = async (req, res) => {
  try {
    const lessons = await Lesson.find().sort({ createdAt: -1 });
    res.json({ lessons });
  } catch (err) {
    console.error('Fetch lessons failed:', err.message);
    res.status(500).json({
      message: 'Failed to fetch lessons',
      error: err.message
    });
    if (!topic || topic.trim().length < 3) {
  return res.status(400).json({ message: 'Please enter a more specific topic' });
}
  }

};

// controllers/lessonController.js
export const getAllLessons = async (req, res) => {
  const lessons = await Lesson.find().sort({ createdAt: -1 });
  res.status(200).json(lessons);
};

