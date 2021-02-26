import React from 'react';
import { Container } from './styles';
import Profile from './Profile';
import Categories from './Categories';
import UserGroups from './UserGroups';

const SideBar: React.FC = () => (
  <Container>
    <Profile />
    <Categories />
    <UserGroups />
  </Container>
);

export default SideBar;
