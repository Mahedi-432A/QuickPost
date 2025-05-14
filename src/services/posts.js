
import api from './axios';

export const getAllPosts = () => api.get('/posts');
export const getPostById = (id) => api.get(`/posts/${id}`);
