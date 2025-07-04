import express from 'express';
import { updateProgress } from '../controllers/progressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/progress', protect, updateProgress);

export default router;