import React, { FC } from 'react';
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import Avatar from '../Avatar';
import VerificationSVG from '@/assets/icons/Verification.svg';
import TaggedText from '@/common/TaggedText';

interface IAccountBar {
  name: string;
  tag: string;
  hasAvatar?: boolean;
  isVerified?: boolean;
  isVertical?: boolean;
}

const AccountBar: FC<IAccountBar> = ({
  name,
  tag,
  hasAvatar,
  isVerified,
  isVertical,
}) => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}
    >
      {hasAvatar && <Avatar width={30} height={30} />}
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
