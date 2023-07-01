import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import VerifyTemplate from './templates/VerifyTemplate';
import { useVerificationMutation } from '@/query/authorization/authorization.mutation';
import { IAuthVerifyRequest } from '@/services/types';

interface IVerifyTemplate {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyForm = ({
  openPopup,
  setOpenPopup,
  setIsVerify,
}: IVerifyTemplate) => {
  const {
    register: verifyRegisterForm,
    handleSubmit: verifyHandleSubmitForm,
    reset: verifyResetForm,
  } = useForm<IAuthVerifyRequest>();

  const { mutateAsync: mutateVerifyEmail, isSuccess: verifyIsSuccess } =
    useVerificationMutation();

  useEffect(() => {
    setIsVerify(verifyIsSuccess);
  }, [setIsVerify, verifyIsSuccess]);

  const requestVerify: SubmitHandler<IAuthVerifyRequest> = async (
    activationCode
  ) => {
    mutateVerifyEmail(activationCode);
    setOpenPopup(false);
    verifyResetForm();
  };

  const onSubmitForm = () => {
    verifyHandleSubmitForm(requestVerify)();
  };
  return (
    <VerifyTemplate
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      onSubmitForm={() => onSubmitForm()}
      verifyRegisterForm={verifyRegisterForm}
    />
  );
};

export default VerifyForm;
