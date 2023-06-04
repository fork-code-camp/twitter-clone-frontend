import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import IPostWidgets from './PostWidgets';
import { IPostContent } from '@/types/Post';

const PostContent: FC<IPostContent> = ({
  postText,
  postImg,
  postAlt,
  likeCount,
  likeIsSelected,
  commentCount,
  retweetCount,
  shareCount,
}) => {
  const isShowImage = postImg && postAlt;
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
      <Typography sx={{ wordWrap: 'break-word' }}>{postText}</Typography>
      {isShowImage && (
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
            src={postImg}
            alt={postAlt}
          />
        </Box>
      )}

      <IPostWidgets
        likeCount={likeCount}
        likeIsSelected={likeIsSelected}
        commentCount={commentCount}
        retweetCount={retweetCount}
        shareCount={shareCount}
      />
    </Container>
  );
};

export default PostContent;
