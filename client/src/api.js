import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ backend stays at 5000
});


export default API;