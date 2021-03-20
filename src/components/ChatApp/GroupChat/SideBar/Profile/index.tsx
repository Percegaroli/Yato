import React from 'react';
import ProfilePicture from '../../../../UI/ProfilePicture';
import { Container, Settings } from './styles';

interface Props {
  pictureSource?: string
}

const Profile: React.FC<Props> = ({ pictureSource }) => (
  <Container>
    <ProfilePicture
      src={pictureSource}
      alt="aaa"
      width={146}
      height={146}
    />
    <Settings />
  </Container>
);

Profile.defaultProps = {
  pictureSource: '/images/image-analysis.png',
};

export default Profile;
