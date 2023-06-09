import api from '../api/index';
import { AUTH_AUTH, AUTH_ACTIVATE, AUTH_REGISTER, AUTH_LOGOUT } from './config';
import { IAuthRegisterRequest, IAuthRegisterResponse, IAuthVerifyResponse, IAuthLoginRequest, IAuthLoginResponse } from './types';

export const register = async (registrationData: IAuthRegisterRequest) => {
  const response = await api.post<IAuthRegisterResponse>(AUTH_REGISTER, registrationData);
  return response
}

export const verifyEmail = async ({activationCode}: {activationCode: string}) => {
  const response = await api.get<IAuthVerifyResponse>(`${AUTH_ACTIVATE}${activationCode}`);
  return response
}

export const login = async (loginData: IAuthLoginRequest) => {
  const response = await api.post<IAuthLoginResponse>(AUTH_AUTH, loginData);
  localStorage.setItem('auth-token', response?.data.jwt);
  return response;
};

export const logout = async () => {
  const response = await api.get(AUTH_LOGOUT);
  return response.data
}