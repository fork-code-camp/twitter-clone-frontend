import React, { FC } from 'react';
import { AppBar, Container, Toolbar, useTheme } from '@mui/material';
import { authorizedNavigationList, unauthorizedNavigationList } from '@/components/navigation/configMenu';
import NavigationItem from './NavigationItem';
import { INavigation, INavigationElement, IPlan } from './types';

const Navigation: FC<INavigation> = ({ plan = 'unauthorized', activeItem }) => {
  const theme = useTheme();

  const PLAN_VIEW: IPlan = {
    authorized: authorizedNavigationList,
    unauthorized: unauthorizedNavigationList
  }

  const PlanView = PLAN_VIEW[plan as keyof typeof PLAN_VIEW]

  return (
    <AppBar
      position="relative"
      sx={{
        width: 'auto',
        background: theme.palette.primary.light,
        boxShadow: 'none',
      }}
    >
      <Container disableGutters sx={{ display: 'flex' }}>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
        >
          {PlanView.map((navItem: INavigationElement) => (
            <NavigationItem
              key={navItem.title}
              navItem={navItem}
              isActiveItem={activeItem === navItem.title}
            />
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
