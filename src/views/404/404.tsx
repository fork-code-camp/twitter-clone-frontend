import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPageView = () => {
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
        <Typography variant="h1">Sorry, that page does not exist</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            mt: '15px',
            width: '100%',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
            }}
          >
            Please visit you
          </Typography>
          <Link href={'./'}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                color: theme.palette.primary.main,
              }}
            >
              Home Page
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPageView;
