import React from 'react';
import {
  Card,
  MemberInfo,
  Name,
  SubtitleContainer,
  Date as Data,
  MemberProfile,
  BadgeContainer,
} from './styles';
import ProfilePicture from '../../../../UI/ProfilePicture';
import RoleBadge from '../../../../UI/RoleBadge';
import UseFullDate from '../../../../../hooks/UseFullDate';

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
  const fullDate = UseFullDate(new Date(memberSince));

  const renderRoleBadge = () => (role ? (
    <BadgeContainer>
      <RoleBadge
        role={role}
      />
    </BadgeContainer>
  ) : <></>);

  const renderizarData = () => (
    <Data>
      Desde
      {' '}
      {fullDate}
    </Data>
  );

  return (
    <Card>
      <ProfilePicture
        height={76}
        width={76}
        src={photo || '/images/image-analysis.png'}
        alt={`${fullName} profile picture`}
      />
      <MemberInfo>
        {renderRoleBadge()}
        <Name>
          {fullName}
        </Name>
        <SubtitleContainer>
          {renderizarData()}
          <MemberProfile>
            Ver Perfil
          </MemberProfile>
        </SubtitleContainer>
      </MemberInfo>
    </Card>
  );
};

export default MemberCard;
