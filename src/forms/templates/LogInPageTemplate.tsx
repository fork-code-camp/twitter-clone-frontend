import { FC } from 'react';
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
} from '@mui/material';
import { IAuthLoginRequest } from '@/services/types';

interface ILogin {
  loginRegisterForm: UseFormRegister<IAuthLoginRequest>;
  onSubmitForm: (e: React.FormEvent) => void;
}

const Login: FC<ILogin> = ({ loginRegisterForm, onSubmitForm }) => {
  const theme = useTheme();

  return (
    <Container
      component="form"
      onSubmit={onSubmitForm}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontFamily: theme.typography.h1.fontFamily,
            fontStyle: theme.typography.h1.fontStyle,
            fontWeight: theme.typography.h1.fontWeight,
            fontSize: theme.typography.h1.fontSize,
            lineHeight: theme.typography.h1.lineHeight,
            color: theme.typography.h1.color,
          }}
        >
          Log in to Twitter
        </Typography>
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
        <Box
          sx={{
            mt: '15px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: theme.typography.h4.fontFamily,
            fontStyle: theme.typography.h4.fontStyle,
            fontWeight: theme.typography.h4.fontWeight,
            fontSize: { xs: 15, sm: theme.typography.h4.fontSize },
            lineHeight: theme.typography.h4.lineHeight,
          }}
        >
          <Link
            href="./../forgotpassword"
            style={{ color: theme.palette.primary.main }}
          >
            Forgot password?
          </Link>
          <Link
            href="./../signup"
            style={{ color: theme.palette.primary.main }}
          >
            Sign up to Twitter
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
