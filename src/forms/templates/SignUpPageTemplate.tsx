import React, { FC, ReactNode } from 'react'
import Image from 'next/image'
import { Typography, TextField, Button, Container, Box } from '@mui/material'
import { useFormContext } from 'react-hook-form'

const SignUpPageTemplate: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Container
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
          src="/icons/twitter-logo.svg"
        />

        <Typography variant="h1" ml="13px">
          Join Twitter today
        </Typography>

        {/* TODO: add this field after implementation on backend */}
        {/* <TextField
            id="name"
            label="Full name"
            type="text"
            variant="outlined"
            fullWidth
          /> */}

        <TextField
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message as ReactNode}
          name="email"
          id="email"
          label="Email address"
          type="email"
          variant="outlined"
          fullWidth
        />

        <TextField
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message as ReactNode}
          id="password"
          name="password"
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
  )
}

export default SignUpPageTemplate
