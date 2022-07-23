import axios, { type AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export class baseApiService {
  async get(url: string, config?: AxiosRequestConfig) {
    return await axiosInstance.get('/' + url, config);
  }

  async getDetail(id: number, url: string, config?: AxiosRequestConfig) {
    return await axiosInstance.get('/' + url + '/' + id, config);
  }

  async post(url: string, body: any, config?: AxiosRequestConfig) {
    return await axiosInstance.post('/' + url, body, config)
  }

  async delete(id: number, url: string, config?: AxiosRequestConfig) {
    return await axiosInstance.delete(url + '/' + id, config)
  }
}