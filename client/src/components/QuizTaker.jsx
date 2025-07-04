import { useEffect, useState } from 'react';
import API from '../api';
import CertificateDownload from './CertificateDownload';

const QuizTaker = ({ lessonId }) => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    API.get(`/api/quizzes/${lessonId}`).then(res => setQuiz(res.data.quiz));
  }, [lessonId]);

  const submit = async () => {
    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    const percent = Math.round((correct / quiz.questions.length) * 100);
    setScore(percent);
    await API.post('/api/users/progress', { lessonId, quizScore: percent });
  };

  if (!quiz) return <p>Loading quiz...</p>;

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h3 className="text-lg font-semibold mb-2">📝 Quiz</h3>
      {quiz.questions.map((q, i) => (
        <div key={i} className="mb-3">
          <p className="font-medium">{q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j} className="block">
              <input
                type="radio"
                name={`q-${i}`}
                value={opt}
                onChange={() => setAnswers({ ...answers, [i]: opt })}
              /> {opt}
            </label>
          ))}
        </div>
      ))}
      <button className="btn-primary" onClick={submit}>Submit</button>
      {score !== null && (
        <>
          <p className="mt-3 font-bold">Score: {score}%</p>
          {score >= 80 && <CertificateDownload lessonId={lessonId} score={score} />}
        </>
      )}
    </div>
  );
};

export default QuizTaker;