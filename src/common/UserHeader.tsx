import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import VerificationSVG from '@/assets/icons/Verification.svg';

interface IUserHeader {
  name: string;
  tag: string;
  verified?: boolean;
  vertical?: boolean;
}

const UserHeader: FC<IUserHeader> = ({ name, tag, verified, vertical }) => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        display: 'contents',
        flexDirection: vertical ? 'column' : 'row',
        alignItems: vertical ? 'start' : 'center',
        gap: '0 8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Typography variant="subtitle1" fontWeight={700}>
          {name}
        </Typography>
        {verified && (
          <IconButton sx={{ m: 0, p: 0 }}>
            <VerificationSVG
              style={{ fill: theme.palette.secondary.contrastText }}
            />
          </IconButton>
        )}
      </Box>
      <Typography variant="subtitle1" color={theme.palette.secondary.main}>
        @{tag}
      </Typography>
    </Container>
  );
};

export default UserHeader;
