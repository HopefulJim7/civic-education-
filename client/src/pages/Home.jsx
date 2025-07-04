import { useEffect, useState } from 'react';
import axios from 'axios';

const CivicLessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/lessons');
        setLessons(res.data);
      } catch (err) {
        console.error('❌ Could not fetch lessons:', err.message);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div>
      <h2>📚 Civic Education Lessons</h2>
      {lessons.map((lesson) => (
        <div key={lesson._id} className="lesson-card">
          <h3>{lesson.topic}</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{lesson.content}</pre>
        </div>
      ))}
    </div>
  );
};

export default CivicLessons;