import React from 'react';
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
} from '@mui/material';

import VerifyForm from '../VerifyForm';
import { IAuthRegisterRequest } from '@/services/types';

interface IRegistration {
  authRegisterForm: UseFormRegister<IAuthRegisterRequest>;
  onSubmitForm: (e: React.FormEvent) => void;
  isLoadingRegister: boolean;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
  isErrorRegister: boolean;
  errorMessage: string;
}
const Registration = ({
  authRegisterForm,
  onSubmitForm,
  isLoadingRegister,
  openPopup,
  setOpenPopup,
  setIsVerify,
  isErrorRegister,
  errorMessage,
}: IRegistration) => {
  const theme = useTheme();

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
          {isErrorRegister && <Alert severity="warning">{errorMessage}</Alert>}
        </Box>
      </Container>

      {!isErrorRegister && (
        <VerifyForm
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setIsVerify={setIsVerify}
        />
      )}
    </>
  );
};

export default Registration;
