import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decode } from 'jsonwebtoken';
import socket from '../../config/socket';
import { Container } from './styles';
import SideBar from './GroupChat/SideBar';
import ActiveWindowContainer from '../UI/ActiveWindowContainer';
import PrivateRoute from '../Route/PrivateRoute';
import GroupChat from './GroupChat';
import { getUserDetails } from '../../service/user';
import { StoreState } from '../../redux/interface';
import { recuperarDadoLocalStorage, isTokenExpirado, removerCampoLocalStorage } from '../../config/localStorage';
import { LocalStorageFields } from '../../enum/localStorage/fields';
import { mapearRespostaApiRedux } from '../../service/user/mapearRespostaAPIRedux';
import { changeUserState } from '../../redux/User/action';
import { loadNotifications } from '../../redux/Notifications/action';
import { loadChatrooms, addNewMessage } from '../../redux/Chatrooms/action';
import { Events } from '../../enum/socket/events';
import { NewMessageReceivedParameters } from '../../interfaces/SocketEvents';
import { mapearNovasMensagensRedux } from '../../service/chatrooms/Messages';

const ChatApp: React.FC = () => {
  const { UserReducer, ChatroomsReducer } = useSelector((state: StoreState) => state);
  const { id } = UserReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = recuperarDadoLocalStorage(LocalStorageFields.token);
    if (!id && token) {
      if (isTokenExpirado(token)) {
        removerCampoLocalStorage(LocalStorageFields.token);
      } else {
        carregarDados(token);
      }
    }
  }, []);

  useEffect(() => {
    ouvirNovasMensagens();
  }, [ChatroomsReducer.chatrooms.length]);

  const carregarDados = async (token: any) => {
    try {
      const tokenDecoded: any = decode(token);
      const { data } = await getUserDetails(tokenDecoded.id);
      const [userState, chatroomState, notificationState] = mapearRespostaApiRedux(data);
      dispatch(changeUserState(userState));
      dispatch(loadChatrooms(chatroomState));
      dispatch(loadNotifications(notificationState));
    } catch (error) {
      console.log('não implementado');
    }
  };

  const ouvirNovasMensagens = () => {
    socket.off(Events.CLIENT_RECEIVE_NEW_MESSAGE);
    socket.on(Events.CLIENT_RECEIVE_NEW_MESSAGE, adicionarMensagemRecebidaRedux);
  };

  const adicionarMensagemRecebidaRedux = (mensagem: NewMessageReceivedParameters) => {
    const chatroomNovaMensagem = ChatroomsReducer.chatrooms.find(
      (chatroom) => chatroom.id === mensagem.room_id,
    );
    const novasMensagens = mapearNovasMensagensRedux([...chatroomNovaMensagem.messages], [{
      date: new Date(),
      message: mensagem.message,
      user_id: mensagem.user_id,
    }]);
    dispatch(addNewMessage({
      chatId: mensagem.room_id,
      messages: novasMensagens,
    }));
  };

  return (
    <PrivateRoute>
      <Container>
        <SideBar />
        <ActiveWindowContainer>
          <GroupChat />
        </ActiveWindowContainer>
      </Container>
    </PrivateRoute>
  );
};

export default ChatApp;
