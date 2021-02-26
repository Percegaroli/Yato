import React from 'react';
import {
  Card,
  MemberInfo,
  Name,
  SubtitleContainer,
  Date,
  MemberProfile,
} from './styles';
import { Roles } from '../../../../../enum/Group/Roles';
import ProfilePicture from '../../../../UI/ProfilePicture';
import RoleBadge from '../../../../UI/RoleBadge';

interface Props {
  photo: string,
  fullName: string,
  memberSince: Date,
  role: string | null
}

const MemberCard: React.FC<Props> = (props: Props) => {
  const {
    photo, fullName, memberSince, role,
  } = props;

  const renderRoleBadge = () => (role ? (
    <RoleBadge
      role={role}
    />
  ) : <></>);

  return (
    <Card>
      <ProfilePicture
        height={76}
        width={76}
        src={photo}
        alt={`${fullName} profile picture`}
      />
      <MemberInfo>
        {renderRoleBadge()}
        <Name>
          {fullName}
        </Name>
        <SubtitleContainer>
          <Date>
            {memberSince}
          </Date>
          <MemberProfile>
            Ver Perfil
          </MemberProfile>
        </SubtitleContainer>
      </MemberInfo>
    </Card>
  );
};

export default MemberCard;
