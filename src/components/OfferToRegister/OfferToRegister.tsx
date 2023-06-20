import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

const OfferToRegister = () => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: '10px',
        maxWidth: 350,
        width: '100%',
        p: '10px',
        border: `1px solid ${theme.palette.border?.main}`,
        borderRadius: '16px',
      }}
    >
      <Typography variant="h2" sx={{ padding: '0px 16px 0px 16px' }}>
        Впервые в Твиттере?
      </Typography>
      <Typography variant="h6" sx={{ padding: '0 12px' }}>
        Зарегистрируйтесь прямо сейчас, чтобы персонализировать свою ленту!
      </Typography>
      <Button
        component={Link}
        href="/registration"
        variant="contained"
        sx={{
          height: '40px',
          borderRadius: '100px',
          m: '16px 12px 16px 12px',
          textTransform: 'inherit',
          fontFamily: theme.typography.button.fontFamily,
          fontStyle: theme.typography.button.fontStyle,
          fontWeight: theme.typography.button.fontWeight,
          fontSize: theme.typography.button.fontSize,
          lineHeight: theme.typography.button.lineHeight,
          color: theme.typography.button.color,
          ':hover': {
            background: theme.palette.primary.contrastText,
          },
        }}
      >
        Зарегистрироваться
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          p: '9px 12px 9px 12px',
        }}
      >
        <Typography variant="h6">Уже зарегистрированы?</Typography>
        <Button
          component={Link}
          href="/login"
          variant="contained"
          sx={{
            height: '40px',
            borderRadius: '100px',
            textTransform: 'inherit',
            fontFamily: theme.typography.button.fontFamily,
            fontStyle: theme.typography.button.fontStyle,
            fontWeight: theme.typography.button.fontWeight,
            fontSize: theme.typography.button.fontSize,
            lineHeight: theme.typography.button.lineHeight,
            color: theme.typography.button.color,
            ':hover': {
              background: theme.palette.primary.contrastText,
            },
          }}
        >
          {' '}
          Логин
        </Button>
      </Box>
      <Typography variant="h6" sx={{ padding: '0 12px' }}>
        Регистрируясь, вы соглашаетесь с пользовательским соглашением и
        соглашаетесь отдать душу.
      </Typography>
    </Container>
  );
};

export default OfferToRegister;
