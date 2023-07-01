import React, { useState } from 'react';
import RegistrationTemplate from './templates/RegistrationTemplate';
import { useRegistrationMutation } from '@/query/authorization/authorization.mutation';
import { IAuthRegisterRequest } from '@/services/types';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

const RegistrationForm = () => {
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const {
    register: authRegisterForm,
    handleSubmit: authHandleSubmitForm,
    reset: authResetForm,
  } = useForm<IAuthRegisterRequest>();

  const {
    mutateAsync: mutateSignUp,
    isLoading: isLoadingRegister,
    isError: isErrorRegister,
    error: errorMessage,
  } = useRegistrationMutation();

  const requestRegister: SubmitHandler<IAuthRegisterRequest> = (value) => {
    mutateSignUp(value);
    setOpenPopup(true);
    authResetForm();
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    authHandleSubmitForm(requestRegister)();
  };

  isVerify && push('/login');

  const messageOnError = (errorMessage as ErrorResponse)?.response.data.message;

  return (
    <RegistrationTemplate
      authRegisterForm={authRegisterForm}
      onSubmitForm={onSubmitForm}
      isLoadingRegister={isLoadingRegister}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      setIsVerify={setIsVerify}
      isErrorRegister={isErrorRegister}
      errorMessage={messageOnError}
    />
  );
};

export default RegistrationForm;
