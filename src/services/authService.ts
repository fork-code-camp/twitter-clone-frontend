import $api from '../api/index';
import { AUTH_AUTH, AUTH_ACTIVATE, AUTH_REGISTER, AUTH_LOGOUT } from './config';

interface IAuthRegister {
  email: string;
  username: string;
  password: string;
}

interface IAuthAuthenticate {
  email: string;
  password: string;
}

interface IActivationCode {
  activationCode: string;
}

interface IToken {
  jwt: string;
}

export const authRegister = async (data: IAuthRegister) => {
  await console.log(data); //TODO сделать валидацию
  try {
    await $api.post<IAuthRegister>(AUTH_REGISTER, data);
  } catch (e) {
    console.error('error authRegister', e);
  }
};

export const authActivate = async ({ activationCode }: IActivationCode) => {
  await console.log(activationCode); //TODO сделать валидацию
  try {
    await $api
      .get(AUTH_ACTIVATE + activationCode)
      .then((response) => console.log(response.statusText));
  } catch (e) {
    console.error('error authActivate', e);
  }
};

export const authAuthenticate = async (data: IAuthAuthenticate) => {
  try {
    await $api.post<IAuthAuthenticate>(AUTH_AUTH, data).then((response) => {
      localStorage.setItem('auth-token', response.data.jwt); //TODO Property 'jwt' does not exist on type 'IAuthAuthenticate'
      console.info('auth-token добавлен в localStorage');
    });
  } catch (e) {
    console.error('ошибка получения auth-token - authAuthenticate', e);
  }
};

export const authLogout = async () => {
  try {
    await $api.get(AUTH_LOGOUT).finally(() => console.log('LOGOUTED'));
  } catch (e) {
    console.error('error authActivate', e);
  }
};
