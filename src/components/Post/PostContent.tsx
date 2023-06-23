import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import PostWidgets from './templates/PostWidgets';
import { IPostContent } from '@/components/Post/types';

const PostContent: FC<IPostContent> = ({
  postText,
  postImg,
  postAlt,
  likeCount,
  likeIsSelected,
  replyCount,
  replyTo,
  retweetCount,
  retweetTo,
  viewsCount,
}) => {
  const isShowImage = postImg && postAlt;
  return (
    <Container
      disableGutters
      sx={{
        m: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: { xs: '100%', md: '100%' },
        maxWidth: { xs: '100%', md: '510px' },
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
            width={100}
            height={100}
            style={{ width: 'inherit', height: 'inherit' }}
            unoptimized
            src={postImg}
            alt={postAlt}
          />
        </Box>
      )}

      <PostWidgets
        likeCount={likeCount}
        likeIsSelected={likeIsSelected}
        replyCount={replyCount}
        replyTo={replyTo}
        retweetCount={retweetCount}
        retweetTo={retweetTo}
        viewsCount={viewsCount}
      />
    </Container>
  );
};

export default PostContent;
