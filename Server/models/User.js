import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['learner', 'admin'], default: 'learner' },
  progress: [
    {
      lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
      quizScore: Number,
      completedAt: Date
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (input) {
  return bcrypt.compare(input, this.password);
};

export default mongoose.model('User', userSchema);