import { Typography } from '@mui/material';
import React, { FC } from 'react';

type IPassedTime = {
  date: string;
};

const PassedTime: FC<IPassedTime> = ({ date }) => {
  return (
    <Typography
      component={'div'}
      color="#5B7083"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <span>·</span>
      {date}
    </Typography>
  );
};

export default PassedTime;
