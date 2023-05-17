import Head from 'next/head';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Container, Box } from '@mui/material';
import { IAuthResponse } from '@/services/types';
import { FC } from 'react';

interface ILogin {
  onSumbit: (data: IAuthResponse) => void;
}

const Login: FC<ILogin> = ({ onSumbit }) => {
  const { register, handleSubmit, reset } = useForm<IAuthResponse>();

  const customHandleSubmit = (data: IAuthResponse) => {
    onSumbit(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
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
              Join Twitter today
            </Typography>
            <TextField
              {...register('username')}
              id="name"
              label="Full name"
              type="text"
              variant="outlined"
              fullWidth
            />
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
              Sign up
            </Button>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Login;
