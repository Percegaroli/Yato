import { api } from '../../config/api';
import { recuperarDadoLocalStorage } from '../../config/localStorage';
import { LocalStorageFields } from '../../enum/localStorage/fields';
import { InviteNewMemberRequestBody } from './interface';

export const inviteNewMemberToGroupByEmail = (body: InviteNewMemberRequestBody) => {
  const token = recuperarDadoLocalStorage(LocalStorageFields.token);
  return api.post('/chatroom/invite', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {};
