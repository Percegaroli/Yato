import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import Profile from './Profile';
import Categories from './Categories';
import UserGroups from './UserGroups';
import { StoreState } from '../../../../redux/interface';
import GroupInvitationlist from './GroupInvitationList';
import { SelectedCategory } from './Categories/interface';

const SideBar: React.FC = () => {
  const { photo } = useSelector((state: StoreState) => state.UserReducer);
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({
    userGroups: true,
    notification: false,
  });

  const changeSelectedCategory = (category: keyof SelectedCategory) => {
    setSelectedCategory({
      userGroups: false,
      notification: false,
      [category]: true,
    });
  };

  return (
    <Container>
      <Profile pictureSource={photo} />
      <Categories
        selectCategory={changeSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <UserGroups isShowing={selectedCategory.userGroups} />
      <GroupInvitationlist isShowing={selectedCategory.notification} />
    </Container>
  );
};

export default SideBar;
