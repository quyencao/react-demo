import axios from 'axios';

import { localStorageHelper } from 'src/utils';

import { httpStatus } from './httpStatus';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = "http://45.77.170.201:7999/api";
// axios.defaults.headers.common["Authorization"] = window.localStorage.getItem("jwt");
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const config = {
  baseURL: process.env.REACT_APP_API_URL,
  validateStatus: (status: number) => {
    return (
      (status >= httpStatus.StatusOK &&
        status < httpStatus.StatusMultipleChoices) ||
      status === httpStatus.StatusBadRequest
    );
  },
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true // Check cross-site Access-Control
};
const httpClient = axios.create(config);
httpClient.interceptors.request.use(
  (config) => {
    if (localStorageHelper.isLogin()) {
      // config.headers['access-token'] = localStorageHelper.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
