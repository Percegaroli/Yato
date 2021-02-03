import React from 'react';
import { Input } from './styles';

interface Props<T> {
  placeholder: string,
  value: T
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string,
  type?: 'text' | 'password'
}

const InputField = <T extends number | string>(props: Props<T>): React.ReactElement => {
  const {
    placeholder, value, onChange, className, type,
  } = props;
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

InputField.defaultProps = {
  className: '',
  type: 'text',
};

export default InputField;
