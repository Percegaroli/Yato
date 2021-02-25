import React from 'react';
import InputField from '../InputField';
import { Container, Label } from './styles';
import { InputItemProps } from './interface';

const FormItem = <T extends string | number>(props: InputItemProps<T>): React.ReactElement => {
  const {
    label, value, onChange, placeholder, inputClassName, labelClassName, type,
  } = props;
  return (
    <Container>
      <Label className={labelClassName}>
        {label}
      </Label>
      <InputField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassName}
        type={type}
      />
    </Container>
  );
};

FormItem.defaultProps = {
  inputClassName: '',
  labelClassName: '',
  type: 'text',
};

export default FormItem;
