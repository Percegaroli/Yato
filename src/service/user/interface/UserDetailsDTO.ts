import { ChatroomDetailsDTO } from './ChatroomDetailsDTO';
import { NotificacaoDTO } from '../../autenticacao/interface/LoginResponse';

export interface UserDetailsDTO {
  name: string,
  lastName: string,
  email: string,
  chatrooms: Array<ChatroomDetailsDTO>,
  id: string,
  photo?: string,
  groupInvitations: Array<NotificacaoDTO>
}
