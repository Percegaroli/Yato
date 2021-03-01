import React, { useState } from 'react';
import { Container } from './styles';
import Profile from './Profile';
import Categories from './Categories';
import UserGroups from './UserGroups';
import GroupInvitationlist from './GroupInvitationList';
import { SelectedCategory } from './Categories/interface';

const SideBar: React.FC = () => {
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
      <Profile />
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
