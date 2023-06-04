import React, { FC } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Container, Box } from '@mui/material';
import { IAuthRegisterRequest } from '@/services/types';

interface IRegisterForm {
  onSumbit: (data: IAuthRegisterRequest) => void;
}

const RegisterForm: FC<IRegisterForm> = ({ onSumbit }) => {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
  } = useForm<IAuthRegisterRequest>();

  const customHandleSubmit = (data: IAuthRegisterRequest) => {
    onSumbit(data);
    reset1();
  };

  return (
    <>
      <main>
        <Container
          component="form"
          onSubmit={handleSubmit1(customHandleSubmit)}
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

export default RegisterForm;
