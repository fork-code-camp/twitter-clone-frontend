import * as React from 'react';
import { FC, useState } from 'react';
import Image from 'next/image';
import { Box, IconButton } from '@mui/material';
import defaultAvatar from '../temp/BlankAvatar.jpg';
interface IAvatar {
  img: string;
  alt: string;
}

const onClick = () => {
  console.log('avatar click');
};

const Avatar: FC<IAvatar> = ({ img, alt }) => {

  return (
    <Box
      sx={{
        borderRadius: '50%',
        overflow: 'hidden',
        width: '48px',
        height: '48px',
        flex: '0 0 auto',
      }}
      onClick={() => onClick()}
    >
      <IconButton sx={{ p: 0 }}>
      <Image
        width={48}
        height={48}
        style={{ objectFit: 'contain' }}
        src={img ? img : defaultAvatar}
        alt={alt ? alt : 'defaultAvatar'}
      />
      </IconButton>
    </Box>
  );
};

export default Avatar;
