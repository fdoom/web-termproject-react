import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export const signUp = (userData) => api.post('/signup', userData);
  export const signIn = (userData) => api.post('/signin', userData);
  
  export const getMemberInfo = () => {
    const token = localStorage.getItem('token');
    return api.get('/memberInfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  export default api;