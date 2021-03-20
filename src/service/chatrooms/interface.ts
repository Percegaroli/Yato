import { Roles } from '../../enum/Group/Roles';

export interface InviteNewMemberRequestBody {
  userInvitedEmail: string;
  groupId: string;
  invitedById: string;
}

export interface ResponderConviteGrupoBody {
  groupId: string,
  userId: string,
  invitedBy: string
}

export interface ChatroomResponse {
  id: string,
  members: Array<MemberResumeDTO>,
  messages: Array<MessageDTO>,
  name: string,
  createdAt: Date,
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

export interface MemberUserInfo {
  id: string,
  name: string,
  lastName: string,
  email: string,
  photo?: string
}
