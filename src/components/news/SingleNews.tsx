import { Box, Container, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import PassedTime from '@/common/PassedTime';
import { ISingleNews } from './types';

const SingleNews: FC<ISingleNews> = ({
  title,
  date,
  text,
  mainTag,
  newsImg,
  newsAlt,
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
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          gap: '6px 0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
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
            {title}&nbsp;
          </Typography>
          <PassedTime date={date} />
        </Box>
        <Box sx={{ textAlign: 'start' }}>
          <Typography
            sx={{
              fontFamily: theme.typography.h3.fontFamily,
              fontStyle: theme.typography.h3.fontStyle,
              fontWeight: theme.typography.h3.fontWeight,
              fontSize: theme.typography.h3.fontSize,
              lineHeight: theme.typography.h3.lineHeight,
              color: theme.typography.h3.color,
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0 4px',
          }}
        >
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
            Trending with
          </Typography>
          <Typography
            sx={{
              fontFamily: theme.typography.h6.fontFamily,
              fontStyle: theme.typography.h6.fontStyle,
              fontWeight: theme.typography.h6.fontWeight,
              fontSize: theme.typography.h6.fontSize,
              lineHeight: theme.typography.h6.lineHeight,
              color: theme.palette.tag?.main,
              letterSpacing: theme.typography.h6.letterSpacing,
            }}
          >
            #{mainTag}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          borderRadius: '10px',
          width: '70px',
          height: '70px',
        }}
      >
        {' '}
        <Image
          width={70}
          height={70}
          style={{ objectFit: 'contain' }}
          src={newsImg}
          alt={newsAlt}
        />
      </Box>
    </Container>
  );
};

export default SingleNews;
