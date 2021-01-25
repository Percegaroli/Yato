import React from 'react';
import { Container } from './styles';
import SideBar from '../UI/SideBar';
import ActiveWindowContainer from '../UI/ActiveWindowContainer';

const ChatApp: React.FC = () => (
  <Container>
    <SideBar />
    <ActiveWindowContainer />
  </Container>
);

export default ChatApp;
