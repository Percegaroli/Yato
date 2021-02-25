import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Form from '../../UI/Form';
import { createAccount } from '../../../service/autenticacao';
import { NewUserForm } from '../../../interfaces/NewUserForm';
import { signUpValidation } from '../../../dataValidation/form';
import { mapearRespostaApiRedux } from '../../../service/autenticacao/mapearRespostaAPI';
import { loadChatrooms } from '../../../redux/Chatrooms/action';
import { changeUserState } from '../../../redux/User/action';
import { salvarDadoLocalStorage } from '../../../config/localStorage';
import { LocalStorageFields } from '../../../enum/localStorage/fields';

const initialState: NewUserForm = {
  email: '',
  password: '',
  lastName: '',
  name: '',
};

const SignUpForm: React.FC = () => {
  const [SignUpFormState, setSignUpFormState] = useState<NewUserForm>(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

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
        const response = await createAccount(SignUpFormState);
        const { data } = response;
        const [userState, chatroomState] = mapearRespostaApiRedux(data);
        dispatch(loadChatrooms(chatroomState));
        dispatch(changeUserState(userState));
        salvarTokenLocalStorage(data.token);
        router.push('/');
      } catch (error) {
        console.log('não implementado');
      }
    }
  };

  const salvarTokenLocalStorage = (token: string) => {
    salvarDadoLocalStorage(LocalStorageFields.token, token);
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
