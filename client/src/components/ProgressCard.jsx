const ProgressCard = ({ progress }) => (
  <div className="bg-white p-4 rounded shadow mt-4">
    <h3 className="font-semibold mb-2">📊 Your Progress</h3>
    {progress.length === 0
      ? <p>No progress yet</p>
      : progress.map((p, i) => (
          <div key={i} className="mb-2">
            <p className="text-sm">Lesson ID: {p.lessonId}</p>
            <p className="text-sm">Score: {p.quizScore}% on {new Date(p.completedAt).toLocaleDateString()}</p>
          </div>
        ))
    }
  </div>
);

export default ProgressCard;