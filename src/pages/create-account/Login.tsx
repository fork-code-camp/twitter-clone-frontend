import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from '@mui/material'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  const {} = props

  return (
    <Box
      sx={{
        fontFamily: 'San Francisco Text Heavy Italic',

        position: 'absolute',
        top: '50%',
        left: '50%',

        transform: 'translate(-50%,-50%)',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: '350px',
        height: '450px',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: '15px',
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontFamily: 'San Francisco Text Heavy',
            letterSpacing: '-2px',
          }}
        >
          Join Twitter today
        </Typography>

        <TextField label="Full name" sx={{ width: '100%' }} />
        <TextField label="Email addres" sx={{ width: '100%' }} />
        <TextField label="Password" type="password" sx={{ width: '100%' }} />

        <Button
          variant="contained"
          sx={{
            borderRadius: '50px',
            width: '100%',
            backgroundColor: '#4E96EE',

            padding: '10px 0',
            fontSize: 'San Francisco Text Semibold',
          }}
        >
          Sign ups
        </Button>
      </Container>
    </Box>
  )
}

export default Login
