import express from 'express';
import { generateLesson, getAllLessons } from '../controllers/lessonController.js';
import { protect } from '../middleware/authMiddleware.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.post('/generate', protect, generateLesson);
router.get('/', protect, getAllLessons);
router.post('/generate', auth, generateLesson);
router.get('/', auth, getAllLessons); 

export default router;