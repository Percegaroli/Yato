import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, MessagesContainer } from './styles';
import Header from './Header';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { StoreState } from '../../../redux/interface';
import DetailsDrawer from './DetailsDrawer';

const GroupChat = (): React.ReactElement => {
  const { selectedChatroomIndex } = useSelector((state: StoreState) => state.ChatroomsReducer);
  const [showDrawer, setShowDrawer] = useState(false);
  return selectedChatroomIndex !== -1
    ? (
      <>
        <Header />
        <Container>
          <MessagesContainer>
            <MessageList />
            <MessageInput />
          </MessagesContainer>
          <DetailsDrawer
            isShowing={showDrawer}
            close={() => setShowDrawer(false)}
          />
        </Container>

      </>
    )
    : <></>;
};

export default GroupChat;
