import React, { useState } from 'react';
import { MenuContainer, Item, Settings } from './styles';
import InviteMemberModal from './InviteMemberModal';

interface ActiveMenuState {
  detalhes: boolean,
  membros: boolean,
  settings: boolean
}

const estadoInicial: ActiveMenuState = {
  detalhes: false,
  membros: false,
  settings: false,
};

const Menu: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeMenuState, setActiveMenuState] = useState<ActiveMenuState>(estadoInicial);

  const selecionarItemMenu = (item: keyof ActiveMenuState) => {
    setActiveMenuState({
      ...estadoInicial,
      [item]: true,
    });
  };

  const abrirMenuMembros = () => {
    selecionarItemMenu('membros');
    setShowInviteModal(true);
  };

  return (
    <MenuContainer>
      <Item
        active={activeMenuState.detalhes}
        onClick={() => selecionarItemMenu('detalhes')}
      >
        Detalhes
      </Item>
      <Item
        active={activeMenuState.membros}
        onClick={abrirMenuMembros}
      >
        Membros
      </Item>
      <Settings />
      <InviteMemberModal
        isShowing={showInviteModal}
        closeModal={() => setShowInviteModal(false)}
      />
    </MenuContainer>
  );
};

export default Menu;
