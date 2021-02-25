import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import Message from '../Message';
import { StoreState } from '../../../../redux/interface';
import { Message as MessageState } from '../../../../redux/Chatrooms/interface';

const MessageList: React.FC = () => {
  const { chatrooms, selectedChatroomIndex } = useSelector(
    (state: StoreState) => state.ChatroomsReducer,
  );

  const getNameAndPhotoMessageOwner = (message: MessageState) => {
    const messageOwner = chatrooms[selectedChatroomIndex].members.find(
      (member) => member.id === message.ownerId,
    );
    return {
      name: messageOwner.name ?? 'Rusbéckson',
      photo: messageOwner.photo ?? '/images/image-analysis.png',
    };
  };

  const renderMessages = () => (
    chatrooms[selectedChatroomIndex].messages.map((message) => (
      <Message
        lines={message.lines}
        sendAt={message.sendAt}
        user={getNameAndPhotoMessageOwner(message)}
      />
    ))

  );

  return (
    <Container>
      {renderMessages()}
    </Container>
  );
};

export default MessageList;
