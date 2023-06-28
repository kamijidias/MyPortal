import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Box, Toolbar, Button } from '@mui/material';

import { NavbarProps } from './types';
import AuthService from '../../services/auth';
import EventBus from '../../utils/eventDispatch';

function NavBar() {
  const [, setState] = useState<NavbarProps>({

    currentUser: undefined,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setState((prevState) => ({
        ...prevState,
        currentUser: user,
      }));
    }

    EventBus.on('logout', logOut);

    return () => {
      EventBus.remove('logout', logOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    AuthService.logout();
    setState((prevState) => ({
      ...prevState,
      currentUser: undefined,
    }));
    navigate('/');
  };

  const location = useLocation();
  const currentUser = 'kamiji@dev.com';
  const currentUserId = 1;

  const button = {
    color: 'white',
    '&:hover': {
      backgroundColor: 'inherit',
      opacity: [0.9, 0.8, 0.7],
    },
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#000000',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {location.pathname === '/home' ? (
            <Link to = {`/profile/${currentUserId}`}>
            <Button disableRipple sx={button}>
              {currentUser}
            </Button>
            </Link>
          ) : (
            <Link to="/home">
              <Button disableRipple sx={button}>
                Home
              </Button>
            </Link>
          )}

            <a href='/' onClick={logOut}>
                <Button disableRipple sx={button}>
                 Sair
                </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
