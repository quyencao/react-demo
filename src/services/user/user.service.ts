import { AxiosRequestConfig } from 'axios';

import httpClient from 'src/configs/http-client';
import { IResponse } from 'src/types';

import { IUser } from './user.interface';

export const getMe = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IUser>>(
    'https://jsonplaceholder.typicode.com/todos/1',
    config
  );
};
