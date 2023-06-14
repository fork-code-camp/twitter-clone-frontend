/*
 *
 *сейчас не используется
 *нужен компонент?
 *
 */

import React, { FC } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import SignUpPageTemplate from '../temp/notUsed/SignUpPageTemplate';
import { yupResolver } from '@hookform/resolvers/yup';
import sighupSchema from './schemas/signup.scema';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';

type FormData = {
  name: string;
  email: string;
  password: string;
};

type Data = {
  code: string;
};

const SignUpPageForm: FC = () => {
  const { push } = useRouter();

  const onFormSubmit: SubmitHandler<FormData> = async (user: FormData) => {
    // await axios({
    //       headers:  {"Content-Type": 'application/json'},
    //   method: 'post',
    //   url: 'http://localhost:8080/api/v1/auth/register',
    //   data: {
    //     username: user.name,
    //     email: user.email,
    //     password: user.password
    //   }
    // }).then(response => {
    //   if (response.status === 200) {
    //     handleClickOpen()
    //   }

    // }).catch(error => console.log(error));

    mutation.mutate(user);

    const { data } = await axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      url: 'http://localhost:8080/api/v1/auth/register',
      data: {
        username: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return data;
  };

  // const data = useQuery("register", () => onFormSubmit);
  const mutation = useMutation((registerUser) => onFormSubmit(user));

  const methods = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(sighupSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit: SubmitHandler<Data> = async (data: Data) => {
    await axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: 'http://localhost:8080/api/v1/auth/activate',
      params: {
        activationCode: data.code,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          push('/');
        }
      })
      .catch((error) => console.log(error));
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // console.log(data)

  return (
    <>
      {mutation.isError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {mutation.error.message}
        </Alert>
      )}

      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onFormSubmit)}>
          <SignUpPageTemplate />
        </Box>
        <Dialog open={open}>
          <DialogTitle>Confirm your email address</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please check your email and enter verification code to get started
              on Twitter:
            </DialogContentText>
            <TextField
              {...register('code')}
              autoFocus
              margin="dense"
              id="code"
              name="code"
              label="Verification code"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(onSubmit)}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </>
  );
};

export default SignUpPageForm;
