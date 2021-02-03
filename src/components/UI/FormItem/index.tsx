import React from 'react';
import InputField from '../InputField';
import { Container, Label } from './styles';
import { InputItemProps } from './interface';

const FormItem = <T extends string | number>(props: InputItemProps<T>): React.ReactElement => {
  const {
    label, value, onChange, placeholder, inputClassName, labelClassName,
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
      />
    </Container>
  );
};

FormItem.defaultProps = {
  inputClassName: '',
  labelClassName: '',
};

export default FormItem;
