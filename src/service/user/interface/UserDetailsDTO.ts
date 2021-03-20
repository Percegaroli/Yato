import { ChatroomDetailsDTO } from './ChatroomDetailsDTO';

export interface UserDetailsDTO {
  name: string,
  lastName: string,
  email: string,
  chatrooms: Array<ChatroomDetailsDTO>,
  id: string,
  photoUrl?: string
}
