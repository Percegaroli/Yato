import React from 'react';
import { SelectedCategory } from './interface';
import {
  Container, GroupIcon, NotificationsIcon, LogoutIcon,
} from './styles';

interface Props {
  selectCategory: (category: keyof SelectedCategory) => void,
  selectedCategory: SelectedCategory
}

const Categories: React.FC<Props> = (props: Props) => {
  const { selectCategory, selectedCategory } = props;
  return (
    <Container>
      <NotificationsIcon
        onClick={() => selectCategory('notification')}
        selected={selectedCategory.notification}
      />
      <GroupIcon
        onClick={() => selectCategory('userGroups')}
        selected={selectedCategory.userGroups}
      />
      <LogoutIcon />
    </Container>
  );
};

export default Categories;
