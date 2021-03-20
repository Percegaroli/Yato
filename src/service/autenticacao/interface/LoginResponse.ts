import { Roles } from '../../../enum/Group/Roles';
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
  photoUrl?: string,
  chatrooms: Array<ChatroomResponse>,
  groupInvitations: Array<NotificacaoDTO>
}

export interface MemberUserInfo {
  id: string,
  name: string,
  lastName: string,
  email: string,
  photoUrl?: string
}

export interface MemberResumeDTO {
  user: MemberUserInfo,
  role: Roles,
  joinedAt: Date
}

export interface MessageDTO {
  date: Date,
  message: string,
  'user_id': string
}

export interface NotificacaoDTO {
  user: GroupInviteNotificationUser,
  group: GroupInviteNotificationGroup,
  invitationDate: Date
}
