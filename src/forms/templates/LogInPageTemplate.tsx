import { Box, Typography, TextField, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const LoginPageTemplate = (props: Props) => {
  const {} = props

  const linkStyle = {
    color: '#1da1f2',
  }

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
          Log in to Twitter
        </Typography>

        <TextField
          InputProps={{ sx: { height: 70 } }}
          placeholder="Email address"
        />
        <TextField
          type="password"
          InputProps={{ sx: { height: 70 } }}
          placeholder="Password"
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
          Log in
        </Button>
        <Box
          sx={{
            mt: '15px',
            width: '100%',

            display: 'flex',
            justifyContent: 'space-between',

            fontFamily: 'SF Compact Display',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: { xs: 15, sm: 18 },
            lineHeight: '21px',
          }}
        >
          <Link href="./../forgotpassword" style={linkStyle}>
            Forgot password?
          </Link>
          <Link href="./../signup" style={linkStyle}>
            Sign up to Twitter
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPageTemplate
