import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/REgisterPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <div>
      {/* 🔹 Tailwind test box */}
      <div className="bg-blue-500 text-white p-4 text-center rounded mb-4">
        ✅ Welcome!
      </div>

      {/* 🔹 Routing */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/lessons" element={<LessonPage />} />
        <Route path="/quizzes/:lessonId" element={<QuizPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
);

export default App;