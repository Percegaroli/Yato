import { AxiosResponse } from 'axios';
import { api } from '../../config/api';
import { recuperarDadoLocalStorage } from '../../config/localStorage';
import { LocalStorageFields } from '../../enum/localStorage/fields';
import { UserDetailsDTO } from './interface/UserDetailsDTO';

export const getUserDetails = (id: string): Promise<AxiosResponse<UserDetailsDTO>> => {
  const token = recuperarDadoLocalStorage(LocalStorageFields.token);
  return api.get(`user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {};
