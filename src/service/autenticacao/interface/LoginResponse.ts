import { Roles } from '../../../enum/Group/Roles';
import { GroupInviteNotificationUser, GroupInviteNotificationGroup } from '../../../redux/Notifications/interface';

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

export interface ChatroomResponse {
  id: string,
  members: Array<MemberResumeDTO>,
  messages: Array<MessageDTO>,
  name: string,
  createdAt: Date,
  photo?: string
}

export interface MemberUserInfo {
  id: string,
  name: string,
  lastName: string,
  email: string,
  photo?: string
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
  invitationDate: Date,
}
