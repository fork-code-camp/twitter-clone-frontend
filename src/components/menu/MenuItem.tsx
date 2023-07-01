import {
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface IMenuItem {
  navItem: {
    title: string;
    icon: ReactNode;
  };
  isActiveItem: boolean;
  url: string;
}

const MenuItem: FC<IMenuItem> = ({ navItem, isActiveItem, url }) => {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <Container
      disableGutters
      key={navItem.title}
      onClick={() => push(url)}
      sx={{
        display: { xs: 'flex', md: 'flex' },
        flexDirection: { xs: 'none', md: 'row' },
        justifyContent: 'start',
        alignItems: 'center',
        px: 1.5,
        my: 1.5,
      }}
    >
      <IconButton
        sx={{
          my: 0,
          pl: 0,
        }}
        color="secondary"
      >
        <ListItemIcon
          sx={{
            minWidth: '40px',
            fill: isActiveItem
              ? theme.palette.primary.main
              : theme.palette.primary.dark,
          }}
        >
          {navItem.icon}
        </ListItemIcon>
      </IconButton>
      <Typography
        variant="button"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
          justifyContent: 'flex-start',
          gap: '10px 0',
          mx: 0,
          p: 0,
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: theme.typography.h3.fontWeight,
          fontSize: theme.typography.h3.fontSize,
          color: isActiveItem
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
          cursor: 'pointer',
        }}
      >
        {navItem.title}
      </Typography>
    </Container>
  );
};

export default MenuItem;
