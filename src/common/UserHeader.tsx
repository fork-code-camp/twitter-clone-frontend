import { Box, Container, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import VerificationSVG from '@/assets/Verification.svg';

type IUserHeader = {
  name: string;
  tag: string;
  verified?: boolean;
  vertical?: boolean;
};

const UserHeader: FC<IUserHeader> = ({ name, tag, verified, vertical }) => {
  return (
    <Container
      component='span'
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
        <Typography component={'span'} fontWeight={700}>
          {name}
        </Typography>
        {verified && (
          <IconButton sx={{ m: 0, p: 0 }}>
            <VerificationSVG style={{ fill: '#1DA1F2' }} />
          </IconButton>
        )}
      </Box>
      <Typography component={'span'} color="#5B7083">
        @{tag}
      </Typography>
    </Container>
  );
};

export default UserHeader;
