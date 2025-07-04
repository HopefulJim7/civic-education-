import express from 'express';
import { issueCertificate } from '../controllers/certificateController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/generate', protect, issueCertificate);

export default router;