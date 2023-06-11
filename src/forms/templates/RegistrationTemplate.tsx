import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  useTheme,
} from '@mui/material';

import { IAuthRegisterRequest } from '@/services/types';
import { useRouter } from 'next/router';
import { useRegistrationMutation } from '@/services/Query/authorization/authorization.mutation';
import VerifyForm from '../VerifyForm';

const Registration = () => {
  const theme = useTheme();
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

  isVerify && push('/login');
  return (
    <>
      <Container
        component="form"
        onSubmit={authHandleSubmitForm(requestRegister)}
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
            {...authRegisterForm('username')}
            id="name"
            label="Full name"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...authRegisterForm('email')}
            id="email"
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...authRegisterForm('password')}
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

      <VerifyForm
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        setIsVerify={setIsVerify}
      />
    </>
  );
};

export default Registration;
