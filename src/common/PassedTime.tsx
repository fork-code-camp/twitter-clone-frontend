import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IPassedTime {
  date: string;
};

const PassedTime: FC<IPassedTime> = ({ date }) => {
  const fontColor = '#5B7083';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Typography variant="subtitle1" color={fontColor}>
        ·
      </Typography>
      <Typography variant="subtitle1" color={fontColor}>
        {date}
      </Typography>
    </Box>
  );
};

export default PassedTime;
