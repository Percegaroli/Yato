import { Roles } from '../../../enum/Group/Roles';

export interface ChatroomDetailsDTO {
  id: string;
  name: string;
  photo?: string;
  members: Array<GroupMemberDTO>;
  createdAt: Date;
  messages: Array<MessageDTO>;
}

export interface GroupMemberDTO {
  user: UserResumeDTO,
  joinedAt: Date,
  role: Roles
}

export interface UserResumeDTO {
  id: string;
  name: string;
  photoUrl?: string;
  lastName: string;
  email: string;
}

export interface MessageDTO {
  'user_id': string;
  message: string;
  date: Date;
}
