import { api } from '../../config/api';
import { ApiConfigFactory } from '../../config/ApiConfigFactory';
import {
  ChangeGroupPictureResponseDTO,
  ChatroomResponse,
  CreateNewGroupDTO,
  InviteNewMemberRequestBody,
  NewGroupResponseDTO,
  ResponderConviteGrupoBody,
} from './interface';

const returnAuthenticatedConfig = () => ApiConfigFactory({
  headers: {
    auth: true,
  },
});

export const createNewGroup = (body: CreateNewGroupDTO) => {
  const config = returnAuthenticatedConfig();
  return api.post<NewGroupResponseDTO>('/chatroom', body, config);
};

export const changeGroupPicture = (body: FormData, groupId: string) => {
  const config = returnAuthenticatedConfig();
  return api.patch<ChangeGroupPictureResponseDTO>(`/chatroom/${groupId}/photo`, body, config);
};

export const inviteNewMemberToGroupByEmail = (body: InviteNewMemberRequestBody) => api.post('/chatroom/invite', body, returnAuthenticatedConfig());

export const getChatroomDetails = (id: string) => api.get<ChatroomResponse>(`/chatroom/${id}`, returnAuthenticatedConfig());

export const answerChatroomInvitation = (
  body: ResponderConviteGrupoBody, accepted: boolean,
) => (accepted ? acceptChatroomInvitation(body) : rejectChatroomInvitation(body));

const acceptChatroomInvitation = (body: ResponderConviteGrupoBody) => api.post('/chatroom/invitation/accept', body, returnAuthenticatedConfig());

const rejectChatroomInvitation = (body: ResponderConviteGrupoBody) => api.post('/chatroom/invitation/reject', body, returnAuthenticatedConfig());

export default {};
