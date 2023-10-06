import React, { FC } from 'react';
import { IconButton, useTheme } from '@mui/material';
import VerificationSVG from '@/assets/icons/Verification.svg';

const VerifiedIcon: FC = () => {
  const theme = useTheme();

  return (
    <IconButton sx={{ m: 0, p: 0 }}>
      <VerificationSVG
        style={{ fill: theme.palette.secondary.contrastText }}
      />
    </IconButton>
  )
}

export default VerifiedIcon