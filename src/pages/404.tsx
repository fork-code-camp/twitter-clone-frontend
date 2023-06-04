import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
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
          width: '320px',
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
          Sorry, that page does not exist
        </Typography>

        <Box
          sx={{
            mt: '15px',
            width: '100%',

            fontFamily: 'SF Compact Display',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: { xs: 15, sm: 18 },
            lineHeight: '21px',
          }}
        >
          Please visit you{' '}
          <Link href={'./'} style={linkStyle}>
            Home Page
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default NotFoundPage
