import React from 'react';
import { ImageProps } from '../../interfaces/ImageProps';
import { GroupIcon } from './styles';

interface StyleProps {
  className?: string
}

type Props = ImageProps & StyleProps;

const GroupImage: React.FC<Props> = (props: Props) => {
  const {
    alt, height, src, width, className,
  } = props;
  return (
    <GroupIcon
      alt={alt}
      height={height}
      src={src}
      width={width}
      className={className}
    />
  );
};

GroupImage.defaultProps = {
  className: '',
};

export default GroupImage;
