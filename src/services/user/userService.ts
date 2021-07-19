import { AxiosRequestConfig } from 'axios';

import httpClient from 'src/configs/httpClient';
import { IResponse } from 'src/types';

import { IUser } from './user';

export const getMe = async (config?: AxiosRequestConfig) => {
  return httpClient.get<IResponse<IUser>>(
    'https://jsonplaceholder.typicode.com/todos/1',
    config
  );
};

export type { IUser };
