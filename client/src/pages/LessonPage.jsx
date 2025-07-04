import { useState } from 'react';
import LessonGenerator from '../components/LessonGenerator';
import QuizTaker from '../components/QuizTaker';

const LessonPage = () => {
  const [lesson, setLesson] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Civic Education Lesson</h1>
      <LessonGenerator onLesson={setLesson} />
      {lesson && <QuizTaker lessonId={lesson._id} />}
    </div>
  );
};

export default LessonPage;