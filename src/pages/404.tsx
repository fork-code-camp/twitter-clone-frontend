import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  const theme = useTheme();

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
            fontFamily: theme.typography.h1.fontFamily,
            fontStyle: theme.typography.h1.fontStyle,
            fontWeight: theme.typography.h1.fontWeight,
            fontSize: theme.typography.h1.fontSize,
            lineHeight: theme.typography.h1.lineHeight,
            color: theme.typography.h1.color,
          }}
        >
          Sorry, that page does not exist
        </Typography>

        <Box
          sx={{
            mt: '15px',
            width: '100%',
            fontFamily: theme.typography.h4.fontFamily,
            fontStyle: theme.typography.h4.fontStyle,
            fontWeight: theme.typography.h4.fontWeight,
            fontSize: { xs: 15, sm: theme.typography.h4.fontSize },
            lineHeight: theme.typography.h4.lineHeight,
          }}
        >
          Please visit you{' '}
          <Link href={'./'} style={{color: theme.palette.primary.main}}>
            Home Page
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default NotFoundPage
