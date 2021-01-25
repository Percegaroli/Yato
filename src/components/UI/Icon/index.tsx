import React from 'react';
import { IconImage } from './styles';

interface Props {
  src: string,
  alt: string,
  width: number,
  height: number,
  className?: string
}

const Icon: React.FC<Props> = (props: Props) => {
  const {
    src, alt, width, height, className,
  } = props;
  return (
    <IconImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
