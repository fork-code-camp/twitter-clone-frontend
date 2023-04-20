import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Twitter from '../icons/Twitter';
import Home from '../icons/Home';
import Explorer from '../icons/Explore';
import Notification from '../icons/Notifications';
import Messages from '../icons/Messages';
import Bookmarks from '../icons/Bookmarks';
import Lists from '../icons/Lists';
import Profile from '../icons/Profile';
import More from '../icons/More';

const pages = [
  { title: 'Home', icon: <Home /> },
  { title: 'Explore', icon: <Explorer /> },
  { title: 'Notifications', icon: <Notification /> },
  { title: 'Messages', icon: <Messages /> },
  { title: 'Bookmarks', icon: <Bookmarks /> },
  { title: 'Lists', icon: <Lists /> },
  { title: 'Profile', icon: <Profile /> },
  { title: 'More', icon: <More /> },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative" sx={{ width: '255px', background: 'none' }}>
      <Container disableGutters sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' }, }}>
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: { xs: 'center', md: 'start' } }}>
          {/* small-screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-beetwenn', alignItems: 'center'}}>
            <Twitter />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Twitter
            </Typography>
          </Box>
          {/* large-screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              flexDirection: { xs: 'none', md: 'column' },
              alignItems: 'start',
            }}
          >
            {pages.map((page) => (
              <Container disableGutters
                key={page.title}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: { xs: 'none', md: 'row' },
                  p: 0,
                }}
              >
                <IconButton color="secondary">{page.icon}</IconButton>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: '#9f9f9f',
                    display: 'flex',
                    gap: '20px 0',
                    fontWeight: 700,
                    fontSize: '19px',
                  }}
                >
                  {page.title}
                </Button>
              </Container>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
