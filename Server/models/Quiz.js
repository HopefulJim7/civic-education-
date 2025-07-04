import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String
});

const quizSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Quiz', quizSchema);