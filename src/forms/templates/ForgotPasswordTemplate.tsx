import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ForgotPasswordForm = () => {
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
            fontFamily: theme.typography.h1.fontFamily,
            fontStyle: theme.typography.h1.fontStyle,
            fontWeight: theme.typography.h1.fontWeight,
            fontSize: theme.typography.h1.fontSize,
            lineHeight: theme.typography.h1.lineHeight,
            color: theme.typography.h1.color,
          }}
        >
          Forgot password
        </Typography>
        <Container>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              textAlign: 'center',
              fontFamily: theme.typography.h4.fontFamily,
              fontStyle: theme.typography.h4.fontStyle,
              fontWeight: theme.typography.h4.fontWeight,
              fontSize: theme.typography.h4.fontSize,
              lineHeight: theme.typography.h4.lineHeight,
              color: theme.palette.secondary.main,
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
            borderRadius: '100px',
            p: '14px',
            textTransform: 'inherit',
            fontFamily: theme.typography.button.fontFamily,
            fontStyle: theme.typography.button.fontStyle,
            fontWeight: theme.typography.button.fontWeight,
            fontSize: theme.typography.button.fontSize,
            lineHeight: theme.typography.button.lineHeight,
            color: theme.typography.button.color,
          }}
        >
          Submit
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '15px',
            fontFamily: theme.typography.h4.fontFamily,
            fontStyle: theme.typography.h4.fontStyle,
            fontWeight: theme.typography.h4.fontWeight,
            fontSize: theme.typography.h4.fontSize,
            lineHeight: theme.typography.h4.lineHeight,
            color: theme.palette.secondary.main,
          }}
        >
          <Link href="./../login" style={{ color: theme.palette.primary.main }}>
            Back to Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;
