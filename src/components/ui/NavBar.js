import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShieldIcon from '@mui/icons-material/Shield';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


const pages = ['Marvel', 'DC', 'Search'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log('me accione')
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogout = () => {
    const action = {
      type : types.logout
    }
    dispatch(action);
    localStorage.removeItem('user');
    navigate("/login", {
      replace: true,
    });
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  const { user } = useContext(AuthContext);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <AppBar position="static" color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <ShieldIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                style={({ isActive }) => {
                  return {
                    display: "block",

                    color: isActive ? "red" : "",
                  };
                }}
                component={NavLink}
                to={"/"}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                HEROES
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
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
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <ShieldIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                HEROES
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}

                >
                  <MenuItem style={({ isActive }) => {
                    return {
                      display: "block",
                      color: isActive ? "red" : "",
                    };
                  }} component={NavLink} to={"/marvel"}>
                    Marvel
                  </MenuItem>
                </Button>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}

                >
                  <MenuItem style={({ isActive }) => {
                    return {
                      display: "block",
                      color: isActive ? "red" : "",
                    };
                  }} component={NavLink} to={"/dc"}>
                    DC
                  </MenuItem>
                </Button>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}

                >
                  <MenuItem style={({ isActive }) => {
                    return {
                      display: "block",
                      color: isActive ? "red" : "",
                    };
                  }} component={NavLink} to={"/search"}>
                    Search
                  </MenuItem>
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <p>User:{user.name}</p>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'flex' }}

                >
                  <MenuItem style={({ isActive }) => {
                    return {
                      display: "block",
                      color: isActive ? "red" : "",
                    };
                  }} component={NavLink} to={"/login"}
                    onClick={handleLogout}
                  >
                    logout
                  </MenuItem>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      <Outlet />
    </>
  );
};


