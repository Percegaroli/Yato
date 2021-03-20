import { ChatroomDetailsDTO } from './ChatroomDetailsDTO';
import { NotificacaoDTO } from '../../autenticacao/interface/LoginResponse';

export interface UserDetailsDTO {
  name: string,
  lastName: string,
  email: string,
  chatrooms: Array<ChatroomDetailsDTO>,
  id: string,
  photoUrl?: string,
  groupInvitations: Array<NotificacaoDTO>
}
