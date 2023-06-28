import { useEffect, useState } from 'react';

import Grid from '../../Componentes/DataTable';
import NavBar from '../../Componentes/Navbar';
import { filteredColumns, rows } from './columnsGrid';
import { Box } from '@mui/system';

import UserService from '../../services/userService';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getUserLoged()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(
          error.response?.data 
          || error.message 
          || error.toString()
        );
      });
  }, []);

  console.log(user);

  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
        <h1>Lista de usuários</h1>
      </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        </Box>
        <Box>
          <Grid rows={rows} columns={filteredColumns} />
      </Box>
    </>
  );
};

export default Home;
