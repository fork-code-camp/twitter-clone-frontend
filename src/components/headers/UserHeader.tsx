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
  isVerified?: boolean;
}

const UserHeader: FC<IUserHeader> = ({ name, tag, isVerified }) => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        width: 'auto',
        m: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0 8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography variant="h5" fontWeight={700}>
            {name}
          </Typography>
          {isVerified && (
            <IconButton sx={{ m: 0, p: 0 }}>
              <VerificationSVG
                style={{ fill: theme.palette.secondary.contrastText }}
              />
            </IconButton>
          )}
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: theme.palette.secondary.main,
          }}
        >
          @{tag.toLowerCase()}
        </Typography>
      </Box>
    </Container>
  );
};

export default UserHeader;
