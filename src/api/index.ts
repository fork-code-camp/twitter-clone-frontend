import axios from 'axios';
import { API_URL } from './config';
import jwtDecode from 'jwt-decode';

interface IJWT {
  sub: string;
  iat: number;
  exp: number;
}

let token: string | null = null;
export let statusIsAuth = false;

if (typeof window !== 'undefined') {
  token = localStorage.getItem('auth-token');
}

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

if (token) {
  try {
    const decoded: IJWT = jwtDecode(token);
    statusIsAuth = decoded.exp > Date.now() / 1000;
  } catch (error) {
    console.log('Invalid JWT token');
  }
} else {
  console.log('user is not authorized');
}

export default api;
