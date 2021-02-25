import { AxiosResponse } from 'axios';
import { api } from '../../config/api';
import { LoginBody } from './interface/LoginBody';
import { LoginResponse } from './interface/LoginResponse';
import { NewAccountBody } from './interface/NewAccountBody';

export const createAccount = async (accountBody: NewAccountBody):
  Promise<AxiosResponse<LoginResponse>> => api.post<LoginResponse>('/user', accountBody);

export const login = (payload: LoginBody): Promise<AxiosResponse<LoginResponse>> => api.post<LoginResponse>('/auth', payload);

export default {};
