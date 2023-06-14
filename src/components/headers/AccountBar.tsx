import React, { FC } from 'react';
import { Box, CircularProgress, Container, IconButton, Typography, useTheme,
} from '@mui/material';
import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';
import CustomAvatar from '../avatar/CustomAvatar';
import TaggedText from '@/common/TaggedText';
import VerificationSVG from '@/assets/icons/Verification.svg';

interface IAccountBar {
  name?: string;
  tag?: string;
  hasAvatar?: boolean;
  isVerified?: boolean;
  isVertical?: boolean;
  isLoading?: boolean
}

const AccountBar: FC<IAccountBar> = ({
  name,
  tag,
  hasAvatar,
  isVerified,
  isVertical,
  isLoading,
}) => {
  const theme = useTheme();
  const { data: avatarUrl } = useGetProfileAvatarQuery();

  if(isLoading) return ( <CircularProgress sx={{ m: 1 }} /> )
  if(!name || !tag) return ( <></> )

  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'row', gap: 1 }} >
      {hasAvatar && <CustomAvatar img={avatarUrl} alt='AvatarAlt' width={30} height={30} />}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex', lg: 'flex' },
          flexDirection: isVertical ? 'column' : 'row',
          alignItems: isVertical ? 'start' : 'center',
          gap: '0 8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography variant="h5" fontWeight={700}>
            {name}
          </Typography>
          {isVerified && (
            <IconButton sx={{ m: 0, p: 0 }}>
              <VerificationSVG
                style={{ fill: theme.palette.secondary.contrastText }}
              />
            </IconButton>
          )}
        </Box>
        <TaggedText color="tag.contrastText" tagSymb="@" text={tag} />
      </Box>
    </Container>
  );
};

export default AccountBar;
