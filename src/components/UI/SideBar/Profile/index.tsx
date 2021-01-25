import React from 'react';
import { MdSettings } from 'react-icons/md';
import ProfilePicture from '../../ProfilePicture';
import { Container, Settings } from './styles';

const Profile: React.FC = () => (
  <Container>
    <ProfilePicture
      src="/images/image-analysis.png"
      alt="aaa"
      width={146}
      height={146}
    />
    <Settings />
  </Container>
);

export default Profile;
