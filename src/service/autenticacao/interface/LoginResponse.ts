import { Roles } from '../../../enum/Group/Roles';

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
  chatrooms: Array<ChatroomResponse>
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
