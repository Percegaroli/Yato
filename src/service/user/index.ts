import { AxiosResponse } from 'axios';
import { api } from '../../config/api';
import { ApiConfigFactory } from '../../config/ApiConfigFactory';
import { UserDetailsDTO } from './interface/UserDetailsDTO';

const returnAuthenticatedConfig = () => ApiConfigFactory({
  headers: {
    auth: true,
  },
});

export const getUserDetails = (id: string): Promise<AxiosResponse<UserDetailsDTO>> => api.get(`user/${id}`, returnAuthenticatedConfig());

export default {};
