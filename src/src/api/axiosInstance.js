import axios from 'axios';
import { JWT_LOCAL_STORAGE } from '../utils/contant';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 15000,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_STORAGE)}`
    }
  });

export default axiosInstance
