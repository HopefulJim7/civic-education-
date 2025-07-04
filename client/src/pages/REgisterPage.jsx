import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    if (!name || !email || !password) return alert('Please fill in all fields');

    try {
      const { data } = await API.post('/api/auth/register', {
        name,
        email,
        password
      });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Create an Account</h2>

      <input
        className="input mb-3"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input mb-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register} className="btn-primary w-full">Register</button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{' '}
        <a href="/" className="text-blue-600 underline">Log in</a>
      </p>
    </div>
  );
};

export default RegisterPage;