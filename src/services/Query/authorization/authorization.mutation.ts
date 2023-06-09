import { registerFn, verifyEmailFn } from '@/services/authService';
import { IAuthRegisterRequest } from '@/services/types';
import { useMutation } from 'react-query';

const authorizationConfig = {
  registerConfig: {
    key: 'registerFn',
    request: async (params: IAuthRegisterRequest) => {
      const res = registerFn(params);
      return res;
    },
  },
  verifyConfig: {
    key: 'verifyEmailFn',
    request: async (params: { activationCode: string }) => {
      const res = verifyEmailFn(params);
      return res;
    },
  },
};

export const useRegistrationMutation = () => {
  const { registerConfig: config } = authorizationConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('регистрация начата', data);
    },
    onError(error) {
      console.log('регистрация ошибка', error);
    },
  });

  return state;
};

export const useVerificationMutation = () => {
  const { verifyConfig: config } = authorizationConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('верификация успешна', data);
    },
    onError(error) {
      console.log('верификация ошибка', error);
    },
  });

  return state;
};
