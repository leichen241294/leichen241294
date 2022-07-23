import axios from 'axios';
import { getAccessToken } from './local-storage.helper';

export function authInterceptors() {
  axios.interceptors.request.use((request) => {
    const isLoggedIn = true;
    
    if (isLoggedIn) {
      const config = {
        headers: request.headers || {}
      }
      
      const accessToken = getAccessToken() || '';
      config.headers.Authorization = accessToken;
    }
  });
}