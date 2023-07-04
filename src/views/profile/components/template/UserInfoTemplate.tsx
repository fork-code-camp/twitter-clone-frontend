import React, { FC } from 'react';
import Avatar from '@/components/Avatar';
import { useGetProfileAvatarQuery } from '@/query/profile/profile.query';
import {
  Box,
  IconButton,
  ListItemIcon,
  Paper,
  Typography,
} from '@mui/material';
import { Container, useTheme } from '@mui/system';
import CalendarSVG from '@/assets/icons/Calendar.svg';
import LocationSVG from '@/assets/icons/Location.svg';

interface IUserInfoTemplate {
  avatarUrl: string;
  username: string;
  tag: string;
  bio: string;
  location: string;
  joinDate: string;
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
      <Box mx={2}>
        <Box sx={{ marginTop: '-75px' }}>
          <Avatar width={150} height={150} img={avatarUrl} alt={avatarUrl} />
        </Box>
        <Typography variant="h2">{username}</Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            letterSpacing: '-0.02em',
          }}
        >
          @{tag.toLowerCase()}
        </Typography>
        <Typography variant="h4" sx={{ my: 1 }}>
          {bio}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: '100%' }}>
                <LocationSVG
                  fill={theme.palette.secondary.main}
                  width="20"
                  height="20"
                />
              </ListItemIcon>
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                letterSpacing: '-0.02em',
              }}
            >
              {location}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton sx={{ p: 0 }}>
              <ListItemIcon sx={{ minWidth: '100%' }}>
                <CalendarSVG
                  fill={theme.palette.secondary.main}
                  width="20"
                  height="20"
                />
              </ListItemIcon>
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                letterSpacing: '-0.02em',
              }}
            >
              {joinDate}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserInfoTemplate;
