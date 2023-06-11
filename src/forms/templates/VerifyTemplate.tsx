import Popup from '@/components/Popup';
import { useVerificationMutation } from '@/services/Query/authorization/authorization.mutation';
import { IAuthVerifyRequest } from '@/services/types';
import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IVerifyTemplate {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyTemplate = ({
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

  return (
    <>
      <Popup
        title="Activate"
        contentText="Please enter this verification code to get started on Twitter:"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onPopupSubmit={verifyHandleSubmitForm(requestVerify)}
      >
        <TextField
          {...verifyRegisterForm('activationCode')}
          id="verif"
          label="Verification code"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </Popup>
    </>
  );
};

export default VerifyTemplate;
