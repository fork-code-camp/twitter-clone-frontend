import Head from 'next/head';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Container, Box } from '@mui/material';
import { FC } from 'react';
import { IAuthLoginRequest } from '@/services/types';

interface ILoginForm {
  onSumbit: (data: IAuthLoginRequest) => void;
}

const LoginForm: FC<ILoginForm> = ({ onSumbit }) => {
  const { register, handleSubmit, reset } = useForm<IAuthLoginRequest>();

  const customHandleSubmit = (data: IAuthLoginRequest) => {
    onSumbit(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Sign Up Twitter" />
      </Head>
      <main>
        <Container
          component="form"
          onSubmit={handleSubmit(customHandleSubmit)}
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
            <Typography variant="h1" ml="13px">
              Log In
            </Typography>
            <TextField
              {...register('email')}
              id="email"
              label="Email address"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              {...register('password')}
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
                borderRadius: '76px',
                p: '14px',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'inherit',
                color: '#ffffff',
              }}
            >
              Login
            </Button>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default LoginForm;
