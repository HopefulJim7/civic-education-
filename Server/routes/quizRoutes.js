import express from 'express';
import { createQuiz, getQuizByLesson } from '../controllers/quizController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', protect, adminOnly, createQuiz);
router.get('/:lessonId', protect, getQuizByLesson);

export default router;