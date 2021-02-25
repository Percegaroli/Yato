import React, { ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import {
  Container, GroupInfoContainer, Photo, DescriptionContainer, GroupName, MemberSince,
} from './styles';
import Menu from './Menu';
import { StoreState } from '../../../../redux/interface';

const Header = (): ReactElement => {
  const { chatrooms, selectedChatroomIndex } = useSelector(
    (state: StoreState) => state.ChatroomsReducer,
  );
  const selectedChatroom = chatrooms[selectedChatroomIndex];
  const { name, photo } = selectedChatroom;
  const memberSince = new Date().toString();

  return (
    <Container>
      <GroupInfoContainer>
        <Photo
          src={photo || '/images/image-analysis.png'}
          width={60}
          height={60}
        />
        <DescriptionContainer>
          <GroupName>
            {name}
          </GroupName>
          <MemberSince>
            {memberSince}
          </MemberSince>
        </DescriptionContainer>
      </GroupInfoContainer>
      <Menu />
    </Container>
  );
};

export default memo(Header);
