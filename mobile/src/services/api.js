import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.109:3333',
  // baseURL: 'http://10.0.3.3:3333',
  baseURL: 'http://localhost:3333',
});

export default api;
