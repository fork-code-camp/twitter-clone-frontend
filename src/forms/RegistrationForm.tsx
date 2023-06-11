import React, { useState } from 'react';
import RegistrationTemplate from './templates/RegistrationTemplate';
import { useRegistrationMutation } from '@/services/Query/authorization/authorization.mutation';
import { IAuthRegisterRequest } from '@/services/types';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
const RegistrationForm = () => {
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const {
    register: authRegisterForm,
    handleSubmit: authHandleSubmitForm,
    reset: authResetForm,
  } = useForm<IAuthRegisterRequest>();

  const { mutateAsync: mutateSignUp, isLoading: isLoadingRegister } =
    useRegistrationMutation();

  const requestRegister: SubmitHandler<IAuthRegisterRequest> = (value) => {
    mutateSignUp(value);
    setOpenPopup(true);
    authResetForm();
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    authHandleSubmitForm(requestRegister)();
    console.log(isVerify);
  };

  isVerify && push('/login');
  return (
    <RegistrationTemplate
      authRegisterForm={authRegisterForm}
      onSubmitForm={onSubmitForm}
      isLoadingRegister={isLoadingRegister}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      setIsVerify={setIsVerify}
    />
  );
};

export default RegistrationForm;
