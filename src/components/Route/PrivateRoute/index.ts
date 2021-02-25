import React from 'react';
import { useRouter } from 'next/router';
import { recuperarDadoLocalStorage } from '../../../config/localStorage';
import { LocalStorageFields } from '../../../enum/localStorage/fields';

interface Props {
  children: React.ReactElement
}

const PrivateRoute = (props: Props): React.ReactElement => {
  const { children } = props;
  const router = useRouter();
  const token = recuperarDadoLocalStorage(LocalStorageFields.token);
  if (typeof window !== 'undefined' && !token) {
    router.push('/login');
  }
  return children;
};

export default PrivateRoute;
