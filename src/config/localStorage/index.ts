import { decode } from 'jsonwebtoken';
import { LocalStorageFields } from '../../enum/localStorage/fields';

export const salvarDadoLocalStorage = (key: LocalStorageFields, valor: string): void => {
  localStorage.setItem(key, valor);
};

export const recuperarDadoLocalStorage = (key: LocalStorageFields)
: string | null => (typeof window !== 'undefined' ? localStorage.getItem(key) : null);

export const isTokenExpirado = (token: string) => {
  const tokenDecoded: any = decode(token);
  const dataExpiracao = new Date(tokenDecoded.exp * 1000);
  return dataExpiracao < new Date();
};

export const removerCampoLocalStorage = (key: LocalStorageFields): void => {
  localStorage.removeItem(key);
};
