import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AppBar, Box, Toolbar, Button } from '@mui/material';
import AuthService from '../../services/auth';
import IUser from '../../types/user';
import EventBus from '../../utils/EventBus';

type NavbarProps = {
  currentUser: IUser | undefined;
};

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
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    }));
    navigate('/login');
  };

  const currentUser = 'kamiji@dev.com';

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
            <Link to={'/profile'}>
                <Button disableRipple sx={button}>
                 {currentUser}
                </Button>
            </Link>

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
