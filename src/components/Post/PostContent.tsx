import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

type IPostContent = {
  text?: string;
  img?: string;
  alt?: string;
};

const PostContent: FC<IPostContent> = ({ text, img, alt }) => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Typography component="span">{text}</Typography>

      <Box
        sx={{
          borderRadius: '20px',
          overflow: 'hidden',
          width: { xs: '200px', md: '450px' },
          height: '100%',
          position: 'relative',
        }}
      >
        {img && alt && (
          <Image
            src={img}
            alt={alt}
            placeholder="blur"
            style={{ width: 'inherit', height: 'inherit' }}
          />
        )}
      </Box>
    </Container>
  );
};

export default PostContent;
