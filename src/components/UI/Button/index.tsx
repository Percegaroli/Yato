import React from 'react';
import { ButtonComponent } from './style';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
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
