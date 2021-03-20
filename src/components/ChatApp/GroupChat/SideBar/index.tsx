import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import Profile from './Profile';
import Categories from './Categories';
import UserGroups from './UserGroups';
import { StoreState } from '../../../../redux/interface';

const SideBar: React.FC = () => {
  const { photo } = useSelector((state: StoreState) => state.UserReducer);
  return (
    <Container>
      <Profile pictureSource={photo} />
      <Categories />
      <UserGroups />
    </Container>
  );
};

export default SideBar;
