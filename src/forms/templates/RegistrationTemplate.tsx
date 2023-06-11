import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Popup from '@/components/Popup';
import Image from 'next/image';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  useTheme,
} from '@mui/material';

import { IAuthRegisterRequest, IAuthVerifyRequest } from '@/services/types';
import { useRouter } from 'next/router';
import { useRegistrationMutation, useVerificationMutation } from '@/services/Query/authorization/authorization.mutation';

const Registration = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const {
    register: authRegister,
    handleSubmit: authHandleSubmit,
    reset: authReset,
  } = useForm<IAuthRegisterRequest>();
  const {
    register: verifyRegister,
    handleSubmit: verifyHandleSubmit,
    reset: verifyReset,
  } = useForm<IAuthVerifyRequest>();

  const { mutateAsync: mutateSignUp, isLoading: isLoadingRegister } = useRegistrationMutation()
  const { mutateAsync: mutateVerifyEmail, isSuccess: verifyIsSuccess} = useVerificationMutation()

  const requestRegister: SubmitHandler<IAuthRegisterRequest> = (value) => {
    mutateSignUp(value);
    setOpenPopup(true);
    authReset();
  };

  const requestVerify: SubmitHandler<IAuthVerifyRequest> = async (
    activationCode
  ) => {
    mutateVerifyEmail(activationCode);
    setOpenPopup(false);
    verifyReset();
  };

  verifyIsSuccess && push('/login')
  return (
    <>
      <Container
        component="form"
        onSubmit={authHandleSubmit(requestRegister)}
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
            {...authRegister('username')}
            id="name"
            label="Full name"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...authRegister('email')}
            id="email"
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...authRegister('password')}
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
        onPopupSubmit={verifyHandleSubmit(requestVerify)}
      >
        <TextField
          {...verifyRegister('activationCode')}
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
