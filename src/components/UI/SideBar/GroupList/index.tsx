import React from 'react';
import { GroupProps } from '../../../interfaces/GroupProps';
import GroupCard from '../../GroupCard';
import { Container } from './styles';

interface Props {
  groups: Array<GroupProps>
}

const GroupList: React.FC<Props> = (props: Props) => {
  const { groups } = props;

  const renderGroups = () => groups.map((group) => (
    <GroupCard
      key={group.name}
      image={group.image}
      name={group.name}
      newMessages={group.newMessages}
      onClick={group.onClick}
    />
  ));
  return (
    <Container>
      {renderGroups()}
    </Container>
  );
};

export default GroupList;
