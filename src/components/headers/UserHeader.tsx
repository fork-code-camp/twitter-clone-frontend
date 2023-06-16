import React, { FC } from 'react';
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
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
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: theme.typography.h5.fontFamily,
          fontStyle: theme.typography.h5.fontStyle,
          fontWeight: 500,
          fontSize: theme.typography.h5.fontSize,
          lineHeight: theme.typography.h5.lineHeight,
          color: theme.typography.h5.color,
          letterSpacing: theme.typography.h5.letterSpacing,
        }}
      >
        @{tag}
      </Typography>
    </Container>
  );
};

export default UserHeader;
