import React, { useState } from 'react';
import Form from '../../UI/Form';

interface SignUpState {
  email: string,
  nome: string,
  sobrenome: string,
  senha: string,
}

const initialState: SignUpState = {
  email: '',
  senha: '',
  sobrenome: '',
  nome: '',
};

const SignUpForm: React.FC = () => {
  const [loginFormState, setLoginFormState] = useState<SignUpState>(initialState);

  const alterarValorInput = (campo: keyof SignUpState, valor: string) => {
    setLoginFormState({
      ...loginFormState,
      [campo]: valor,
    });
  };

  const criarConta = () => 1 + 1;

  return (
    <Form
      title="Cadastro"
      itens={[
        {
          label: 'Nome',
          onChange: (event) => alterarValorInput('nome', event.target.value),
          placeholder: 'Digite seu nome',
          value: loginFormState.nome,
        },
        {
          label: 'Sobrenome',
          onChange: (event) => alterarValorInput('sobrenome', event.target.value),
          placeholder: 'Digite seu sobrenome',
          value: loginFormState.sobrenome,
        },
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
        text: 'Criar conta',
        onClick: criarConta,
      }}
    />
  );
};

export default SignUpForm;
