import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Popup from '@/common/Popup';
import { useMutation } from 'react-query';
import Image from 'next/image';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  useTheme,
} from '@mui/material';
import { registerFn, verifyEmailFn } from '@/services/authService';
import { IAuthRegisterRequest, IAuthVerifyRequest } from '@/services/types';
import { useRouter } from 'next/router';

const Registration = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
  } = useForm<IAuthRegisterRequest>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
  } = useForm<IAuthVerifyRequest>();

  const { mutate: mutateSignUp, isLoading: isLoadingRegister } = useMutation(
    (userData: IAuthRegisterRequest) => registerFn(userData),
    {
      onSuccess(data) {
        console.log('регистрация начата', data);
      },
      onError(error) {
        console.log('регистрация ошибка', error);
      },
    }
  );

  const { mutate: mutateVerifyEmail } = useMutation(
    (activationCode: IAuthVerifyRequest) => verifyEmailFn(activationCode),
    {
      onSuccess(data) {
        console.log('верификация успешна', data);
        push('/login');
      },
      onError(error) {
        console.log('верификация ошибка', error);
      },
    }
  );

  const requestRegister: SubmitHandler<IAuthRegisterRequest> = (value) => {
    mutateSignUp(value);
    setOpenPopup(true);
    reset1();
  };

  const requestVerify: SubmitHandler<IAuthVerifyRequest> = async (
    activationCode
  ) => {
    mutateVerifyEmail(activationCode);
    setOpenPopup(false);
    reset2();
  };

  return (
    <>
      <Container
        component="form"
        onSubmit={handleSubmit1(requestRegister)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '452px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: '25px',
            maxWidth: 450,
            width: '100%',
          }}
        >
          <Image
            width={50}
            height={41}
            alt="twitter icon"
            src="/icons/twitter-logo.png"
          />
          <Typography variant="h1" ml="13px">
            {' '}
            Join Twitter today{' '}
          </Typography>
          <TextField
            {...register1('username')}
            id="name"
            label="Full name"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...register1('email')}
            id="email"
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...register1('password')}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: '100px',
              p: '14px',
              fontSize: theme.typography.button.fontSize,
              fontWeight: theme.typography.button.fontWeight,
              textTransform: 'inherit',
              color: theme.typography.button.color,
            }}
          >
            Sign up
          </Button>
          {isLoadingRegister && <Typography>Loading.......</Typography>}
        </Box>
      </Container>

      <Popup
        title="Activate"
        contentText="Please enter this verification code to get started on Twitter:"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onPopupSubmit={handleSubmit2(requestVerify)}
      >
        <TextField
          {...register2('activationCode')}
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

export default Registration;
