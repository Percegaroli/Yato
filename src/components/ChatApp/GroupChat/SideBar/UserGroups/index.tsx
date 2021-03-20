import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../../UI/Button';
import GroupList from '../GroupList';
import { Container } from './styles';
import { StoreState } from '../../../../../redux/interface';
import { selectChatroom } from '../../../../../redux/Chatrooms/action';
import NewGroupModal from '../../../NewGroupModal';

interface Props {
  isShowing: boolean
}

const UserGroups: React.FC<Props> = (props: Props) => {
  const { isShowing } = props;
  const { ChatroomsReducer } = useSelector((state: StoreState) => state);
  const [showingNewGroupModal, setShowingNewGroupModal] = useState(false);
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

  return isShowing ? (
    <>
      <Container>
        <Button
          text="Novo Grupo"
          onClick={() => setShowingNewGroupModal(true)}
        />
        <GroupList
          groups={createChatroomsResume()}
        />
      </Container>
      <NewGroupModal
        isShowing={showingNewGroupModal}
        close={() => setShowingNewGroupModal(false)}
      />
    </>
  ) : null;
};

export default memo(UserGroups);
