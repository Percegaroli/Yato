import React, { useState } from 'react';
import Form from '../../UI/Form';
import { createAccount } from '../../../service/autenticacao';
import { NewUserForm } from '../../../interfaces/NewUserForm';
import { signUpValidation } from '../../../dataValidation/form';

const initialState: NewUserForm = {
  email: '',
  password: '',
  lastName: '',
  name: '',
};

const SignUpForm: React.FC = () => {
  const [SignUpFormState, setSignUpFormState] = useState<NewUserForm>(initialState);

  const alterarValorInput = (campo: keyof NewUserForm, valor: string) => {
    setSignUpFormState({
      ...SignUpFormState,
      [campo]: valor,
    });
  };

  const validarCampos = () => {
    const valores = Object.entries(SignUpFormState);
    let isValido = true;
    valores.forEach((campo: [keyof NewUserForm, string]) => {
      const key = campo[0];
      const value = campo[1];
      if (!signUpValidation[key](value)) {
        isValido = false;
      }
    });
    return isValido;
  };

  const criarConta = async () => {
    if (validarCampos()) {
      try {
        await createAccount(SignUpFormState);
      } catch (error) {
        console.log('não implementado');
      }
    }
  };

  return (
    <Form
      title="Cadastro"
      itens={[
        {
          label: 'Nome',
          onChange: (event) => alterarValorInput('name', event.target.value),
          placeholder: 'Digite seu nome',
          value: SignUpFormState.name,
        },
        {
          label: 'Sobrenome',
          onChange: (event) => alterarValorInput('lastName', event.target.value),
          placeholder: 'Digite seu sobrenome',
          value: SignUpFormState.lastName,
        },
        {
          label: 'Email',
          onChange: (event) => alterarValorInput('email', event.target.value),
          placeholder: 'yato@yatochat.com',
          value: SignUpFormState.email,
        },
        {
          label: 'Senha',
          onChange: (event) => alterarValorInput('password', event.target.value),
          placeholder: '***************',
          value: SignUpFormState.password,
          type: 'password',
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
