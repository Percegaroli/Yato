import { LoginFieldEnum } from '../enum/form/LoginFields';
import { SignUpFieldEnum } from '../enum/form/SignUpFields';

const isEmptyField = (value: string) => value.trim() === '';

type isValid =(valor: string) => boolean

type LoginValidation = {
  [key in keyof typeof LoginFieldEnum]: isValid
};

type SignUpValidation = {
  [key in keyof typeof SignUpFieldEnum]: isValid
}

export const loginValidation: LoginValidation = {
  email: (value) => !isEmptyField(value),
  password: (value) => !isEmptyField(value),
};

export const signUpValidation: SignUpValidation = {
  email: (value) => !isEmptyField(value),
  password: (value) => !isEmptyField(value),
  lastName: (value) => !isEmptyField(value),
  name: (value) => !isEmptyField(value),
};
