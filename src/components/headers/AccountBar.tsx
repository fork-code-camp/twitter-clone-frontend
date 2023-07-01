import React, { FC } from 'react';
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import VerificationSVG from '@/assets/icons/Verification.svg';
import Avatar from '../Avatar';

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
          display: { xs: 'none', md: 'none', lg: 'flex' },
          flexDirection: isVertical ? 'column' : 'row',
          alignItems: isVertical ? 'start' : 'center',
          gap: '0 8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography variant="subtitle1" fontWeight={700}>
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
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: theme.palette.secondary.main,
          }}
        >
          @{tag.toLowerCase()}
        </Typography>
      </Box>
    </Container>
  );
};

export default AccountBar;
