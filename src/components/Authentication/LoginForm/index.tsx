import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Form from '../../UI/Form';
import { LoginForm } from '../../../interfaces/LoginForm';
import { login } from '../../../service/autenticacao';
import { mapearRespostaApiRedux } from '../../../service/autenticacao/mapearRespostaAPI';
import { changeUserState } from '../../../redux/User/action';
import { loadChatrooms } from '../../../redux/Chatrooms/action';
import { loadNotifications } from '../../../redux/Notifications/action';
import { salvarDadoLocalStorage } from '../../../config/localStorage';
import { LocalStorageFields } from '../../../enum/localStorage/fields';

const initialState: LoginForm = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [loginFormState, setLoginFormState] = useState<LoginForm>(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const alterarValorInput = (campo: keyof LoginForm, valor: string) => {
    setLoginFormState({
      ...loginFormState,
      [campo]: valor,
    });
  };

  const fazerLogin = async () => {
    try {
      const response = await login(loginFormState);
      const { data } = response;
      const [userState, chatroomsState, notificationState] = mapearRespostaApiRedux(data);
      salvarTokenLocalStorage(data.token);
      dispatch(changeUserState(userState));
      dispatch(loadChatrooms(chatroomsState));
      dispatch(loadNotifications(notificationState));
      router.push('/');
    } catch (error) {
      console.log('Ainda não implementado');
    }
  };

  const salvarTokenLocalStorage = (token: string) => {
    salvarDadoLocalStorage(LocalStorageFields.token, token);
  };

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
