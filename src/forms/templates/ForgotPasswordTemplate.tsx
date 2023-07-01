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
        <Typography variant="h1">Forgot password</Typography>
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 400,
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
          }}
        >
          <Link href="./../login" style={{ color: theme.palette.primary.main }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                color: theme.palette.secondary.main,
              }}
            >
              Back to Login
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;
