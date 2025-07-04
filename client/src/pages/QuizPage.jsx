import { useParams } from 'react-router-dom';
import QuizTaker from '../components/QuizTaker';

const QuizPage = () => {
  const { lessonId } = useParams();
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Quiz</h1>
      <QuizTaker lessonId={lessonId} />
    </div>
  );
};

export default QuizPage;