import React from 'react';
import GroupInfo from './GroupInfo';
import GroupMenu from './GroupMenu';
import { HeaderContainer } from './styles';

const GroupHeader: React.FC = () => (
  <HeaderContainer>
    <GroupInfo />
    <GroupMenu />
  </HeaderContainer>
);

export default GroupHeader;
