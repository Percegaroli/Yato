import { AxiosRequestConfig } from 'axios';
import { LocalStorageFields } from '../enum/localStorage/fields';
import { recuperarDadoLocalStorage } from './localStorage';

interface HeaderConfigFactory {
  auth: boolean
}

interface ApiConfigFactory {
  headers?: HeaderConfigFactory
}

export const ApiConfigFactory = (config: ApiConfigFactory): AxiosRequestConfig => ({
  headers: config.headers ? ApiHeaderFactory(config.headers) : null,
});

export const ApiHeaderFactory = (config: HeaderConfigFactory): AxiosRequestConfig['headers'] => ({
  Authorization: config.auth ? criarBearerToken() : null,
});

const criarBearerToken = () => {
  const token = recuperarDadoLocalStorage(LocalStorageFields.token);
  return `Bearer ${token}`;
};
