import { useEffect, useState } from 'react';

import UserService from '../../services/userService';
import NavBar from '../../Componentes/Navbar';
import Grid from '../../Componentes/DataTable';
import { filteredColumns, rows } from './columnsGrid';
import { Box } from '@mui/system';

interface HomeProps {
  content: string;
}

const Home = () => {
  const [,setState] = useState<HomeProps>({ content: '' });

  useEffect(() => {
    UserService.getPublicContent()
      .then((response) => {
        setState({
          content: response.data,
        });
      })
      .catch((error) => {
        setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      });
  }, []);

  return (
  <>
    <NavBar />
    <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
      <h1>Lista de Usuários</h1>
    </Box>
    <Box sx={{ marginTop: '2rem' }}>
      <Grid
        rows={rows}
        columns={filteredColumns}
      />
    </Box>
  </>
  );
};

export default Home;
