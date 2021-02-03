import React from 'react';
import { Input } from './styles';

interface Props<T> {
  placeholder: string,
  value: T
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const InputField = <T extends number | string>(props: Props<T>): React.ReactElement => {
  const {
    placeholder, value, onChange, className,
  } = props;
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

InputField.defaultProps = {
  className: '',
};

export default InputField;
