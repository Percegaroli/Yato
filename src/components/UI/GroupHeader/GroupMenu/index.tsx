import React from 'react';
import SettingsIcon from '../../SettingsIcon';
import { Container, Text } from './styles';

const GroupMenu: React.FC = () => (
  <Container>
    <Text>
      Detalhes
    </Text>
    <Text>
      Membros
    </Text>
    <SettingsIcon />
  </Container>
);

export default GroupMenu;
