import { Box, Typography, TextField, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const ForgotPasswordTemplate = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',

        transform: 'translate(-50%,-50%)',

        display: 'flex',

        maxWidth: { xs: 300, sm: 350, md: 450 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          rowGap: '25px',
          width: '450px',
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
            fontFamily: 'SF Compact Display',
            fontStyle: 'normal',
            fontWeight: '900',
            fontSize: '42px',
            lineHeight: '50px',
            color: '#000000',
          }}
        >
          Forgot password
        </Typography>
        <Container>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontFamily: 'SF Compact Display',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '21px',

              textAlign: 'center',

              color: '#5B7083',
            }}
          >
            Enter your email and we will send you a link to reset your password
          </Typography>
        </Container>

        <TextField
          InputProps={{ sx: { height: 70 } }}
          placeholder="Email address"
        />

        <Button
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
          Submit
        </Button>
        <Box
          sx={{
            mt: '15px',

            display: 'flex',
            justifyContent: 'center',

            fontFamily: 'SF Compact Display',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '21px',
          }}
        >
          <Link href="./../login" style={{ color: '#1da1f2' }}>
            Back to Login
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgotPasswordTemplate
