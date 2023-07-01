import * as React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { Box, IconButton, useTheme } from '@mui/material';
import defaultAvatar from '../assets/images/BlankAvatar.jpg';
interface IAvatar {
  img?: string | null;
  alt?: string | null;
  width?: number;
  height?: number;
}

const onClick = () => {
  console.log('avatar click');
};

const Avatar: FC<IAvatar> = ({ img, alt, width = 48, height = 48 }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        outline: `5px solid ${theme.palette.primary.light}`,
        borderRadius: '50%',
        overflow: 'hidden',
        width: `${width}px`,
        height: `${height}px`,
        flex: '0 0 auto',
      }}
      onClick={() => onClick()}
    >
      <IconButton sx={{ p: 0 }}>
        <Image
          width={width}
          height={height}
          style={{ objectFit: 'contain', transform: 'scale(1.5)' }}
          src={img ? img : defaultAvatar}
          alt={alt ? alt : 'defaultAvatar'}
        />
      </IconButton>
    </Box>
  );
};

export default Avatar;
