import React from 'react';
import { useRouter } from 'next/router';
import { recuperarDadoLocalStorage } from '../../../config/localStorage';
import { LocalStorageFields } from '../../../enum/localStorage/fields';

interface Props {
  children: React.ReactElement
}

const UnauthenticatedRoute = (props: Props): React.ReactElement => {
  const { children } = props;
  const router = useRouter();
  if (recuperarDadoLocalStorage(LocalStorageFields.token)) {
    router.push('/');
  }
  return children;
};

export default UnauthenticatedRoute;
