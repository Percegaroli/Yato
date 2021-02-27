import React, { ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import {
  Container, GroupInfoContainer, Photo, DescriptionContainer, GroupName, MemberSince,
} from './styles';
import Menu from './Menu';
import { StoreState } from '../../../../redux/interface';
import UseFullDate from '../../../../hooks/UseFullDate';

const Header = (): ReactElement => {
  const { ChatroomsReducer, UserReducer } = useSelector(
    (state: StoreState) => state,
  );
  const { chatrooms, selectedChatroomIndex } = ChatroomsReducer;
  const selectedChatroom = chatrooms[selectedChatroomIndex];
  const { name, photo, members } = selectedChatroom;
  const thisUser = members.find((member) => member.id === UserReducer.id);
  const joinDate = UseFullDate(new Date(thisUser.memberSince));

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
            Membro desde
            {' '}
            {joinDate}
          </MemberSince>
        </DescriptionContainer>
      </GroupInfoContainer>
      <Menu />
    </Container>
  );
};

export default memo(Header);
