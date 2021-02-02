import React from 'react';
import Button from '../../Button';
import GroupList from '../GroupList';
import { Container } from './styles';

const sulplast = {
  image: {
    src: '/images/image-analysis.png',
    alt: 'aaaa',
  },
  name: 'Sulplast',
  newMessages: 0,
};

const UserGroups: React.FC = () => (
  <Container>
    <Button text="Novo Grupo" />
    <GroupList
      groups={[sulplast, sulplast, sulplast, sulplast]}
    />
  </Container>
);

export default UserGroups;
