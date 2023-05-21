import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import RegisterForm from '../forms/RegisterForm';
import Popup from '@/common/Popup';
import { authActivate, authRegister } from '@/services/authService';

interface IAuthRegistration {
  email: string;
  username: string;
  password: string;
}

interface IActivationCode {
  activationCode: string;
}

const Registration = () => {
  const { register, handleSubmit, reset } = useForm<IActivationCode>();
  const [openPopup, setOpenPopup] = useState(false);

  const onSumbit = async (data: IAuthRegistration) => {
    authRegister(data);
    setOpenPopup(true);
  };

  const onEnterClick = async (data: IActivationCode) => {
    authActivate(data);
    reset();
    setOpenPopup(false);
  };

  return (
    <main>
      <RegisterForm onSumbit={onSumbit} />

      <Popup
        title="Activate"
        contentText="Please enter this verification code to get started on Twitter:"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onEnterClick={handleSubmit(onEnterClick)}
      >
        <TextField
          {...register('activationCode')}
          autoFocus
          margin="dense"
          id="name"
          label="Verification code"
          type="text"
          fullWidth
          variant="standard"
        />
      </Popup>
    </main>
  );
};

export default Registration;
