import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const { data } = await API.post('/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input className="input mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="input mb-4" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn-primary" onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;