import React, { useState } from 'react';
import Form from '../../UI/Form';
import { LoginForm } from '../../../interfaces/LoginForm';

const initialState: LoginForm = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [loginFormState, setLoginFormState] = useState<LoginForm>(initialState);

  const alterarValorInput = (campo: keyof LoginForm, valor: string) => {
    setLoginFormState({
      ...loginFormState,
      [campo]: valor,
    });
  };

  const fazerLogin = () => 1 + 1;

  return (
    <Form
      title="Login"
      itens={[
        {
          label: 'Email',
          onChange: (event) => alterarValorInput('email', event.target.value),
          placeholder: 'yato@yatochat.com',
          value: loginFormState.email,
        },
        {
          label: 'Senha',
          onChange: (event) => alterarValorInput('password', event.target.value),
          placeholder: '***************',
          value: loginFormState.password,
          type: 'password',
        },
      ]}
      buttonProps={{
        text: 'Entrar',
        onClick: fazerLogin,
      }}
    />
  );
};

export default Login;
