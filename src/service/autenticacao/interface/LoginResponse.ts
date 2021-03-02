import { GroupInviteNotificationUser, GroupInviteNotificationGroup } from '../../../redux/Notifications/interface';
import { ChatroomResponse } from '../../chatrooms/interface';

export interface LoginResponse {
  token: string,
  user: UserResponse,
}

export interface UserResponse {
  id: string
  name: string,
  lastName: string,
  email: string,
  photo?: string,
  chatrooms: Array<ChatroomResponse>,
  groupInvitations: Array<NotificacaoDTO>
}

export interface NotificacaoDTO {
  user: GroupInviteNotificationUser,
  group: GroupInviteNotificationGroup,
  invitationDate: Date,
}
