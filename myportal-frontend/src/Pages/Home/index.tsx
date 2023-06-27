import { useEffect, useState } from 'react';

import UserService from '../../services/userService';
import NavBar from '../../Componentes/Navbar';
import Grid from '../../Componentes/DataTable';
import { columns, rows } from './columnsGrid';

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
      <Grid 
        rows={rows}
        columns={columns}
      />
    </>
  );
};

export default Home;
