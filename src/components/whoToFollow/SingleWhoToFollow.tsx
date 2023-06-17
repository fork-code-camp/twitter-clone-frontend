import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { IWhoToFollow } from './types';

const SingleWhoToFollow: FC<IWhoToFollow> = ({
  name,
  tag,
  avatarImg,
  altImg,
  url,
  followURL,
}) => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
        minWidth: { xs: 'auto', sm: '350px' },
        p: 2,
        ':hover': {
          background: theme.palette.background.paper,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          cursor: 'pointer',
        }}
        onClick={() => {
          console.log(url);
        }}
      >
        <Box
          sx={{
            display: 'block',
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            width: '48px',
            height: '48px',
            flex: '0 0 auto',
          }}
        >
          <Image
            width={48}
            height={48}
            style={{ objectFit: 'contain' }}
            src={avatarImg}
            alt={altImg}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: theme.typography.h3.fontFamily,
              fontStyle: theme.typography.h3.fontStyle,
              fontWeight: theme.typography.h3.fontWeight,
              fontSize: theme.typography.h3.fontSize,
              lineHeight: theme.typography.h3.lineHeight,
              color: theme.typography.h3.color,
              letterSpacing: theme.typography.h3.letterSpacing,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: theme.typography.h6.fontFamily,
              fontStyle: theme.typography.h6.fontStyle,
              fontWeight: theme.typography.h6.fontWeight,
              fontSize: theme.typography.h6.fontSize,
              lineHeight: theme.typography.h6.lineHeight,
              color: theme.typography.h6.color,
              letterSpacing: theme.typography.h6.letterSpacing,
            }}
          >
            {tag}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="outlined"
        href={followURL}
        sx={{
          borderRadius: '100px',
          width: '77px',
          height: '39px',
          fontFamily: theme.typography.button.fontFamily,
          fontStyle: theme.typography.button.fontStyle,
          fontWeight: theme.typography.button.fontWeight,
          fontSize: theme.typography.button.fontSize,
          lineHeight: theme.typography.button.lineHeight,
          color: theme.palette.primary.main,
          ':hover': {
            background: theme.palette.primary.light,
          },
        }}
      >
        Follow
      </Button>
    </Container>
  );
};

export default SingleWhoToFollow;
