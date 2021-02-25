import React from 'react';
import { Input } from './styles';

interface Props<T> {
  placeholder: string,
  value: T
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent) => void
  className?: string,
  type?: 'text' | 'password'
}

const InputField = <T extends number | string>(props: Props<T>): React.ReactElement => {
  const {
    placeholder, value, onChange, className, type, onKeyDown,
  } = props;
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={className}
    />
  );
};

InputField.defaultProps = {
  className: '',
  type: 'text',
  onKeyDown: () => {},
};

export default InputField;
