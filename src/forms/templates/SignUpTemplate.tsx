import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { UseFormRegister } from 'react-hook-form';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  useTheme,
  Alert,
  CircularProgress,
} from '@mui/material';

import VerifyForm from '../VerifyForm';
import { IAuthSignUpRequest } from '@/services/types';
import { IErrorData } from '../types';
import { AxiosError } from 'axios';

interface ISignUpTemplate {
  authRegisterForm: UseFormRegister<IAuthSignUpRequest>;
  onSubmitForm: (e: React.FormEvent) => void;
  isLoading: boolean;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  error?: AxiosError;
}
const SignUpTemplate = ({
  authRegisterForm,
  onSubmitForm,
  isLoading,
  openPopup,
  setOpenPopup,
  setIsVerify,
  isError,
  error,
}: ISignUpTemplate) => {
  const theme = useTheme();
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    isError && error && !error.response?.status && setErrorMessage(error.message)
    isError && error && error.response && error.response?.status && setErrorMessage((error.response.data as IErrorData).message)
    isError && error && console.log(error && error.response?.status);
  }, [error, isError])

  return (
    <>
      <Container
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '452px',
          position: 'relative',
        }}
      >
        {isLoading && <CircularProgress sx={{ position: 'absolute', m: 1 }} />}
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
          {isError && <Alert severity="warning">{errorMessage}</Alert>}
        </Box>
      </Container>

      {!isError && (
        <VerifyForm
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setIsVerify={setIsVerify}
        />
      )}
    </>
  );
};

export default SignUpTemplate;
