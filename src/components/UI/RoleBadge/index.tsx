import React from 'react';
import { Roles } from '../../../enum/Group/Roles';
import { Badge, Role } from './styles';

interface Props {
  role: string
}

const RoleBadge: React.FC<Props> = (props: Props) => {
  const { role } = props;
  return (
    <Badge>
      <Role>
        {role}
      </Role>
    </Badge>
  );
};

export default RoleBadge;
