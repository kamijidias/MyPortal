import { useEffect, useState } from 'react';

import { Container, Card, CardContent } from '@mui/material';
import UserService from '../../services/userService';
import NavBar from '../../Componentes/Navbar';
import { useParams } from 'react-router';

interface ProfileProps {
  content: string;
}

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [, setState] = useState<ProfileProps>({ content: '' });

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
  }, [id]);

  const cardContainer = 'container para adicionar campos do usuário';

  const cardStyle = {
    backgroundColor: '#E9ECEF',
    fontSize: 20,
    minWidth: 275,
    boxShadow: 'none',
    padding: '20px',
  };

  return (
    <>
      <NavBar />
      <Container>
        <CardContent>
          <Card sx={cardStyle}>{cardContainer}</Card>
        </CardContent>
      </Container>
    </>
  );
};

export default Profile;
