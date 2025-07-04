import { useEffect, useState } from 'react';
import API from '../api';
import LessonGenerator from '../components/LessonGenerator';
import ProgressCard from '../components/ProgressCard';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.get('/api/auth/me');
        setUser(res.data.user);
        const l = await API.get('/api/lessons');
        setLessons(l.data.lessons);
      } catch {
        alert('Failed to load');
      }
    };
    fetch();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">👋 Welcome, {user.name}</h1>
      {user.role === 'admin' ? (
        <LessonGenerator onLesson={() => {}} />
      ) : (
        <>
          <p className="text-gray-700 mb-2">Start learning with a new topic or revisit a past lesson below.</p>
          <LessonGenerator onLesson={() => {}} />
        </>
      )}
      <ProgressCard progress={user.progress || []} />
    </div>
  );
};

export default Dashboard;