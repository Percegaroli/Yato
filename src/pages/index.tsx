import React from 'react';
import Head from 'next/head';
import ChatApp from '../components/ChatApp';

const Home:React.FC<null> = () => (
  <>
    <Head>
      <title>Yato Chat</title>
    </Head>
    <ChatApp />
  </>
);

export default Home;
