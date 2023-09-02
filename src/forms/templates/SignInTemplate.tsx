import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { UseFormRegister } from 'react-hook-form';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Link,
  useTheme,
  Alert,
  CircularProgress,
} from '@mui/material';
import { IAuthLoginRequest } from '@/services/types';
import { AxiosError } from 'axios';
import { IErrorData } from '../types';

interface ISignInTemplate {
  loginRegisterForm: UseFormRegister<IAuthLoginRequest>;
  onSubmitForm: (e: React.FormEvent) => void;
  isLoading: boolean,
  isError: boolean;
  error?: AxiosError
}

const SignInTemplate: FC<ISignInTemplate> = ({ loginRegisterForm, onSubmitForm, isLoading, isError, error }) => {
  const theme = useTheme();
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    isError && error && !error.response?.status && setErrorMessage(error.message)
    isError && error && error.response && error.response?.status && setErrorMessage((error.response.data as IErrorData).message)
    isError && error && console.log(error && error.response?.status);
  }, [error, isError])

  return (
    <Container
      component="form"
      onSubmit={onSubmitForm}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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
        <Typography variant="h1">Log in to Twitter</Typography>
        <TextField
          {...loginRegisterForm('email')}
          id="email"
          label="Email address"
          type="email"
          variant="outlined"
          fullWidth
        />
        <TextField
          {...loginRegisterForm('password')}
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
            textTransform: 'inherit',
            fontFamily: theme.typography.button.fontFamily,
            fontStyle: theme.typography.button.fontStyle,
            fontWeight: theme.typography.button.fontWeight,
            fontSize: theme.typography.button.fontSize,
            lineHeight: theme.typography.button.lineHeight,
            color: theme.typography.button.color,
          }}
        >
          Login
        </Button>
        {isError && <Alert severity="warning">{errorMessage}</Alert>}
        <Box
          sx={{
            mt: '15px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 400,
          }}
        >
          <Link
            href="./../forgotpassword"
            style={{ color: theme.palette.primary.main }}
          >
            <Typography variant="h4" sx={{ fontWeight: 400 }}>
              Forgot password?
            </Typography>
          </Link>
          <Link href="./../signup">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                color: theme.palette.primary.main,
              }}
            >
              Sign up to Twitter
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignInTemplate;
