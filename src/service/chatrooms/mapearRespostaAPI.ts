import { ChatroomState, Members } from '../../redux/Chatrooms/interface';
import { ChatroomResponse, MemberResumeDTO } from './interface';
import { mapearNovasMensagensRedux } from './Messages';

export const mapearDadosChatrooms = (chatroomsResponse: Array<ChatroomResponse>):
Array<ChatroomState> => chatroomsResponse.map((chatroom) => ({
  id: chatroom.id,
  members: chatroom.members.map((member) => mapearDadosMembroChatroom(member)),
  messages: mapearNovasMensagensRedux([], chatroom.messages),
  name: chatroom.name,
  photo: chatroom.photoUrl,
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

export default {};
