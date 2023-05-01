import { Box, Container, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import VerificationSVG from '@/assets/Verification.svg';

interface IUserHeader {
  name: string;
  tag: string;
  verified?: boolean;
  vertical?: boolean;
};

const UserHeader: FC<IUserHeader> = ({ name, tag, verified, vertical }) => {
  const iconColor = '#1DA1F2';
  const fontColor = '#5B7083';

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
            <VerificationSVG style={{ fill: iconColor }} />
          </IconButton>
        )}
      </Box>
      <Typography variant="subtitle1" color={fontColor}>
        @{tag}
      </Typography>
    </Container>
  );
};

export default UserHeader;
