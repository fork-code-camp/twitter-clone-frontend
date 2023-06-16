import theme from '@/theme/theme';
import { Box } from '@mui/material';
import React from 'react';

const UnderLine = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${theme.palette.border?.main}`,
      }}
    />
  );
};

export default UnderLine;
