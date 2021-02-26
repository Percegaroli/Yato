import React from 'react';
import { useSelector } from 'react-redux';
import { Container, MembersQuantity } from './styles';
import MemberCard from '../MemberCard';
import { StoreState } from '../../../../../redux/interface';

const MembersList: React.FC = () => {
  const { chatrooms, selectedChatroomIndex } = useSelector(
    (state: StoreState) => state.ChatroomsReducer,
  );

  const renderMembersList = () => chatrooms[selectedChatroomIndex].members.map((member) => (
    <MemberCard
      fullName={`${member.name} ${member.lastName}`}
      memberSince={member.memberSince}
      photo={member.photo}
      role={member.role}
      key={member.id}
    />
  ));

  return (
    <Container>
      <MembersQuantity>
        {chatrooms[selectedChatroomIndex].members.length}
        {' '}
        Membros
      </MembersQuantity>
      {renderMembersList}
    </Container>
  );
};

export default MembersList;
