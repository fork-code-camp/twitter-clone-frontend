import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import PostActions from './PostActions';
import { IPostContent } from '@/types/Post';



const PostContent: FC<IPostContent> = ({
  text,
  img,
  alt,
  likeCount,
  likeSelected,
  commentCount,
  commentSelected,
  retweetCount,
  retweetSelected,
  shareCount,
  shareSelected,
}) => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: { xs: '200px', md: '510px' },
      }}
    >
      <Typography component="span">{text}</Typography>
      {img && alt && (
        <Box
          sx={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{ width: 'inherit', height: 'inherit' }}
            placeholder="blur"
            unoptimized
            src={img}
            alt={alt}
          />
        </Box>
      )}

      <PostActions
        likeCount={likeCount}
        likeSelected={likeSelected}
        commentCount={commentCount}
        commentSelected={commentSelected}
        retweetCount={retweetCount}
        retweetSelected={retweetSelected}
        shareCount={shareCount}
        shareSelected={shareSelected}
      />
    </Container>
  );
};

export default PostContent;
