
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // or your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
