import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import userRoutes from './routes/userRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);
app.use('/api/certificates', certificateRoutes);

export default app;