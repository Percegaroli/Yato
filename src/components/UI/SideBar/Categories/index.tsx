import React from 'react';
import {
  Container, GroupIcon, PersonIcon, LogoutIcon,
} from './styles';

const Categories: React.FC = () => (
  <Container>
    <PersonIcon />
    <GroupIcon />
    <LogoutIcon />
  </Container>
);

export default Categories;
