import React from 'react';
import { MenuContainer, Item, Settings } from './styles';

const Menu = (props: any) => {
  const { aa } = props;
  return (
    <MenuContainer>
      <Item>
        Detalhes
      </Item>
      <Item>
        Membros
      </Item>
      <Settings />
    </MenuContainer>
  );
};

export default Menu;
