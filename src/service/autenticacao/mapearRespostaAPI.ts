import { decode } from 'jsonwebtoken';
import { LoginResponse, UserResponse, NotificacaoDTO } from './interface/LoginResponse';
import { ChatroomState } from '../../redux/Chatrooms/interface';
import { UserState } from '../../redux/User/interface';
import { GroupInviteNotification } from '../../redux/Notifications/interface';
import { mapearDadosChatrooms } from '../chatrooms/mapearRespostaAPI';

export const mapearRespostaApiRedux = (resposta: LoginResponse):
[UserState, Array<ChatroomState>, Array<GroupInviteNotification>] => {
  const { user } = resposta;
  const { chatrooms, groupInvitations } = user;
  const token: any = decode(resposta.token);
  return [
    mapearDadosUsuario(user, token.id),
    mapearDadosChatrooms(chatrooms),
    mapearDadosNotificacoes(groupInvitations),
  ];
};

const mapearDadosUsuario = (userResponse: UserResponse, id: string): UserState => {
  const {
    email, photoUrl, name, lastName,
  } = userResponse;
  return {
    id,
    email,
    photo: photoUrl,
    name,
    lastName,
  };
};

export const mapearDadosNotificacoes = (
  notificacoes: Array<NotificacaoDTO>,
): Array<GroupInviteNotification> => notificacoes.map((notificacao, index) => {
  const { group, invitationDate, user } = notificacao;
  return {
    id: index,
    group,
    invitationDate,
    user,
  };
});

export default {};
