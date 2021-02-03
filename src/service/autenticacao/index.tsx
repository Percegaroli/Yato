import { AxiosResponse } from 'axios';
import { api } from '../../config/api';
import { NewAccountBody } from './interface/NewAccountBody';

export const createAccount = async (accountBody: NewAccountBody):
  Promise<AxiosResponse<any>> => {
  const response = await api.post<any>('/user', accountBody);
  return response;
};

export default {};
