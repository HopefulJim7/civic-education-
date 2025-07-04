import { useState } from 'react';
import API from '../api';

const LessonGenerator = ({ onLesson }) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const { data } = await API.post('/api/lessons/generate', { topic });
      setContent(data.lesson.content);
      onLesson(data.lesson);
    } catch {
      alert('Generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <input
        className="input mb-2"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter civic topic (e.g. Human Rights)"
      />
      <button className="btn-primary mb-2" onClick={handleGenerate}>
        {loading ? 'Generating...' : 'Generate Lesson'}
      </button>
      {content && <p className="whitespace-pre-wrap bg-gray-100 p-3 rounded">{content}</p>}
    </div>
  );
};

export default LessonGenerator;