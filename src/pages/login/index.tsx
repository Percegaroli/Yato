import React from 'react';
import Head from 'next/head';
import LoginPage from '../../components/Login/Page';

const Login:React.FC<null> = () => (
  <>
    <Head>
      <title>Yato Chat - Login</title>
    </Head>
    <LoginPage />
  </>
);

export default Login;
