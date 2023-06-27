import { useEffect, useState } from 'react';

import { Container, Card, CardContent } from '@mui/material';
import UserService from '../../services/userService';
import NavBar from '../../Componentes/Navbar';

interface ProfileProps {
  content: string;
}

const Profile = () => {
  const [,setState] = useState<ProfileProps>({ content: '' });

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

  const cardContainer = 'container para adicionar campos do usuário'

  const card = {
    backgroundColor: '#E9ECEF',
    fontSize: 20,
    minWidth: 275,
    boxShadow: 'none',
    p: '20px',
  };

  return (
    <>
    <NavBar />
        <Container>
            <CardContent>
                <Card sx={card}>{cardContainer}</Card>
            </CardContent>
        </Container>
    </>
  );
};

export default Profile;
