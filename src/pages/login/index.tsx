import React from 'react';
import Head from 'next/head';
import Authentication from '../../components/Authentication/Page';

const AuthenticationPage:React.FC<null> = () => (
  <>
    <Head>
      <title>Yato Chat - Login</title>
    </Head>
    <Authentication />
  </>
);

export default AuthenticationPage;
