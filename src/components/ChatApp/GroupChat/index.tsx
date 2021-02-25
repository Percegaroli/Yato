import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { StoreState } from '../../../redux/interface';

const GroupChat = (): React.ReactElement => {
  const { selectedChatroomIndex } = useSelector((state: StoreState) => state.ChatroomsReducer);

  return selectedChatroomIndex !== -1
    ? (
      <>
        <Header />
        <MessageList />
        <MessageInput />
      </>
    )
    : <></>;
};

export default GroupChat;
