import React from 'react';
import { ButtonComponent } from './style';

interface Props {
  text: string
  onClick?: () => void,
  className?: string
}

const Button: React.FC<Props> = (props: Props) => {
  const { text, onClick, className } = props;
  return (
    <ButtonComponent
      className={className}
      onClick={onClick}
    >
      {text}
    </ButtonComponent>
  );
};

Button.defaultProps = {
  onClick: undefined,
  className: '',
};

export default Button;
