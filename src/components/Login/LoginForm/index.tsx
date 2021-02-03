import React, { useState } from 'react';
import Form from '../../UI/Form';

interface LoginState {
  email: string,
  senha: string,
}

const initialState: LoginState = {
  email: '',
  senha: '',
};

const LoginForm: React.FC = () => {
  const [loginFormState, setLoginFormState] = useState<LoginState>(initialState);

  const alterarValorInput = (campo: keyof LoginState, valor: string) => {
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
          onChange: (event) => alterarValorInput('senha', event.target.value),
          placeholder: '***************',
          value: loginFormState.senha,
        },
      ]}
      buttonProps={{
        text: 'Entrar',
        onClick: fazerLogin,
      }}
    />
  );
};

export default LoginForm;
