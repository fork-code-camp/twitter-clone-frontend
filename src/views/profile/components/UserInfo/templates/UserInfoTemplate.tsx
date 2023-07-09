import React, { FC } from 'react';
import Avatar from '@/components/Avatar';
import { Box, Paper, Typography } from '@mui/material';
import { Container, useTheme } from '@mui/system';
import TaggedText from '@/common/TaggedText';
import Location from '../Location';
import JoinDate from '../JoinDate';
interface IUserInfoTemplate {
  avatarUrl?: string;
  username: string | 'null';
  tag: string | 'null';
  bio?: string;
  location?: string;
  joinDate?: string;
}

const UserInfoTemplate: FC<IUserInfoTemplate> = ({
  avatarUrl,
  username,
  tag,
  bio,
  location,
  joinDate,
}) => {
  const theme = useTheme();
  return (
    <Container disableGutters sx={{ marginBottom: '10px' }}>
      <Paper
        variant="elevation"
        square
        sx={{
          background: theme.palette.primary.main,
          width: '100%',
          height: '100px',
        }}
      ></Paper>
      <Box display="flex" flexDirection="column" gap={1} mx={2}>
        <Box marginTop="-75px">
          <Avatar width={150} height={150} img={avatarUrl} alt={avatarUrl} />
        </Box>
        <Typography variant="h2">{username}</Typography>
        {tag && <TaggedText color="tag.contrastText" tagSymb="@" text={tag} />}
        {bio && (
          <Typography variant="h4" my={1}>
            {' '}
            {bio}{' '}
          </Typography>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          {location && <Location location={location} />}
          {joinDate && <JoinDate joinDate={joinDate} />}
        </Box>
      </Box>
    </Container>
  );
};

export default UserInfoTemplate;
