import { default as axios } from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://phimapi.com/',
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
