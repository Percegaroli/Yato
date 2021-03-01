import { decode } from 'jsonwebtoken';
import {
  LoginResponse, ChatroomResponse, UserResponse, MemberResumeDTO, NotificacaoDTO,
} from './interface/LoginResponse';
import { ChatroomState, Members } from '../../redux/Chatrooms/interface';
import { UserState } from '../../redux/User/interface';
import { mapearNovasMensagensRedux } from '../chatrooms/Messages';
import { GroupInviteNotification } from '../../redux/Notifications/interface';

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
    email, photo, name, lastName,
  } = userResponse;
  return {
    id,
    email,
    photo,
    name,
    lastName,
  };
};

const mapearDadosChatrooms = (chatroomsResponse: Array<ChatroomResponse>):
Array<ChatroomState> => chatroomsResponse.map((chatroom) => ({
  id: chatroom.id,
  members: chatroom.members.map((member) => mapearDadosMembroChatroom(member)),
  messages: mapearNovasMensagensRedux([], chatroom.messages),
  name: chatroom.name,
  photo: chatroom.photo,
  newMessages: 0,
}));

const mapearDadosMembroChatroom = (membro: MemberResumeDTO): Members => {
  const { joinedAt, role, user } = membro;
  const {
    name, lastName, id, photo,
  } = user;
  return {
    id,
    lastName,
    name,
    photo,
    memberSince: joinedAt,
    role,
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
