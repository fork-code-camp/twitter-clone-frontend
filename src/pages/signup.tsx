import Head from 'next/head'
import Image from 'next/image'
import { Typography, TextField, Button, Container, Box } from '@mui/material'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Twitter clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>
      <main>
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
              src="/icons/twitter-logo.png"
            />
            <Typography
              variant="h1"
              ml="13px"
            >
              Join Twitter today
            </Typography>
            <TextField
              id="name"
              label="Full name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="email"
              label="Email address"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
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
              Sign up
            </Button>
          </Box>
        </Container>
      </main>
    </>
  )
}
