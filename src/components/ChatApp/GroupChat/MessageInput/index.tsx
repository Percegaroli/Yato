import React, { useState, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputField from '../../../UI/InputField';
import { Container, IconButton, SendIcon } from './styles';
import socket from '../../../../config/socket';
import { Events } from '../../../../enum/socket/events';
import { StoreState } from '../../../../redux/interface';
import { addNewMessage } from '../../../../redux/Chatrooms/action';
import { mapearNovasMensagensRedux } from '../../../../service/chatrooms/Messages';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const { UserReducer, ChatroomsReducer } = useSelector((state: StoreState) => state);
  const { chatrooms, selectedChatroomIndex } = ChatroomsReducer;
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (message) {
      dispararEventoNovaMensagem();
      adicionarNovaMensagemRedux();
      setMessage('');
    }
  };

  const dispararEventoNovaMensagem = () => {
    socket.emit(Events.CLIENT_SEND_NEW_MESSAGE, {
      room_id: chatrooms[selectedChatroomIndex].id,
      user_id: UserReducer.id,
      message,
    });
  };

  const adicionarNovaMensagemRedux = () => {
    const novasMensagens = mapearNovasMensagensRedux(
      [...chatrooms[selectedChatroomIndex].messages], [{
        date: new Date(),
        message,
        user_id: UserReducer.id,
      }],
    );
    dispatch(addNewMessage({
      chatId: chatrooms[selectedChatroomIndex].id,
      messages: novasMensagens,
    }));
  };

  const checkForEnterKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Container>
      <InputField
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={checkForEnterKey}
        placeholder="Digite sua mensagem"
        value={message}
      />
      <IconButton onClick={sendMessage}>
        <SendIcon />
      </IconButton>
    </Container>
  );
};

export default MessageInput;
