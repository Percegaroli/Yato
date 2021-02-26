import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../../UI/Button';
import GroupList from '../GroupList';
import { Container } from './styles';
import { StoreState } from '../../../../../redux/interface';
import { selectChatroom } from '../../../../../redux/Chatrooms/action';

const UserGroups: React.FC = () => {
  const { ChatroomsReducer } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();

  const alterarChatroomSelecionado = (index: number) => {
    dispatch(selectChatroom(index));
  };

  const createChatroomsResume = () => {
    const defaultImage = '/images/image-analysis.png';
    const imageSize = 50;
    return ChatroomsReducer.chatrooms.map((chatroom, index) => ({
      name: chatroom.name,
      newMessages: chatroom.newMessages,
      image: {
        src: chatroom.photo ?? defaultImage,
        alt: `${chatroom.name} image`,
        height: imageSize,
        width: imageSize,
      },
      onClick: () => alterarChatroomSelecionado(index),
    }));
  };

  return (
    <Container>
      <Button
        text="Novo Grupo"
      />
      <GroupList
        groups={createChatroomsResume()}
      />
    </Container>
  );
};

export default memo(UserGroups);
