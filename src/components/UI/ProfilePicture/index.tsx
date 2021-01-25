import React from 'react';
import { ProfileImage } from './styles';

interface Props {
  src: string,
  alt: string,
  width: number,
  height: number,
  className?: string
}

const ProfilePicture: React.FC<Props> = (props: Props) => {
  const {
    alt, src, height, width, className,
  } = props;
  return (
    <ProfileImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

ProfilePicture.defaultProps = {
  className: '',
};

export default ProfilePicture;
