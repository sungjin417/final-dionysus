import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8111', // 백엔드 서버의 주소로 변경해야 합니다.
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
