import { useEffect, useState } from 'react';
import axios from 'axios';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/lessons');
        setLessons(res.data);
      } catch (err) {
        console.error('🛑 Failed to fetch lessons:', err.message);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div>
      <h2>📘 Civic Education Lessons</h2>
      {lessons.length === 0 ? (
        <p>No lessons available.</p>
      ) : (
        lessons.map((lesson) => (
          <div key={lesson._id} className="lesson-card">
            <h3>{lesson.topic}</h3>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{lesson.content}</pre>
          </div>
        ))
      )}
    </div>
  );
};

export default Lessons;