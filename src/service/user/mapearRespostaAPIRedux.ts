import { UserDetailsDTO } from './interface/UserDetailsDTO';
import { ChatroomState, Members, Message } from '../../redux/Chatrooms/interface';
import { UserState } from '../../redux/User/interface';
import { ChatroomDetailsDTO, GroupMemberDTO, MessageDTO } from './interface/ChatroomDetailsDTO';

export const mapearRespostaApiRedux = (resposta: UserDetailsDTO):
[UserState, Array<ChatroomState>] => {
  const { chatrooms } = resposta;
  return [mapearDadosUsuario(resposta), mapearDadosChatrooms(chatrooms)];
};

const mapearDadosUsuario = (userDetails: UserDetailsDTO): UserState => {
  const {
    email, photo, name, lastName, id,
  } = userDetails;
  return {
    id,
    email,
    photo,
    name,
    lastName,
  };
};

const mapearDadosChatrooms = (chatroomsResponse: Array<ChatroomDetailsDTO>):
Array<ChatroomState> => chatroomsResponse.map((chatroom) => {
  const {
    id, messages, name, photo, members,
  } = chatroom;
  return {
    members: members.map((member) => mapearDadosMembro(member)),
    messages: mapearMensagens(messages),
    name,
    photo,
    id,
    newMessages: 0,
  };
});

const mapearDadosMembro = (member: GroupMemberDTO): Members => {
  const { joinedAt, role, user } = member;
  const {
    id, lastName, name, photo,
  } = user;
  return {
    id,
    lastName,
    memberSince: joinedAt,
    name,
    photo,
    role,
  };
};

const mapearMensagens = (messagesDTO: Array<MessageDTO>) => {
  const messagesState: Array<Message> = [];
  messagesDTO.forEach((messageDTO) => {
    const { message } = messageDTO;
    if (!messagesState.length) {
      messagesState.push(criarNovaMensagem(messageDTO));
    } else {
      const mensagemAnterior = messagesState[messagesState.length - 1];
      if (mensagemAnterior.ownerId === messageDTO.user_id) {
        mensagemAnterior.lines.push(message);
      } else {
        messagesState.push(criarNovaMensagem(messageDTO));
      }
    }
  });
  return messagesState;
};

const criarNovaMensagem = (messageDTO: MessageDTO) => ({
  lines: [messageDTO.message],
  sendAt: messageDTO.date,
  ownerId: messageDTO.user_id,
});

export default {};
