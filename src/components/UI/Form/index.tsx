import React from 'react';
import { InputItemProps } from '../FormItem/interface';
import { Container, Title, FieldsContainer } from './styles';
import FormItem from '../FormItem';
import Button from '../Button';
import { ButtonProps } from '../Button/interface';

interface Props {
  title: string,
  itens: Array<InputItemProps<string | number>>
  buttonProps: ButtonProps
}

const Form: React.FC<Props> = (props: Props) => {
  const { itens, title, buttonProps } = props;

  const renderFormItems = () => itens.map((item) => {
    const {
      label, onChange, placeholder, value, inputClassName, labelClassName, type,
    } = item;
    return (
      <FormItem
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        inputClassName={inputClassName}
        labelClassName={labelClassName}
        key={`${title}-${label}`}
        type={type}
      />
    );
  });

  const renderButton = () => {
    const { text, className, onClick } = buttonProps;
    return (
      <Button
        text={text}
        className={className}
        onClick={onClick}
      />
    );
  };

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <FieldsContainer>
        { renderFormItems() }
      </FieldsContainer>
      { renderButton() }
    </Container>
  );
};

export default Form;
