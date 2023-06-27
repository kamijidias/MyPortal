import { useEffect, useState, ChangeEvent } from 'react';

import { Card, CardContent, TextField } from '@mui/material';
import UserService from '../../services/userService';
import NavBar from '../../Componentes/Navbar';
import { useParams } from 'react-router';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { LoadingButton } from '@mui/lab';
import { Container } from '@mui/system';
import { cardStyle } from './styles';
import { FormState, ProfileProps, initialState } from './types';

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [, setState] = useState<ProfileProps>({ content: '' });
  const [formState, setFormState] = useState<FormState>(initialState);

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const nameUser = 'Andrew';
  const secondName = 'Kamiji';

  const fullNameUser = `${nameUser} ${secondName}`;

  return (
    <>
    <NavBar />
      <Container>
        <CardContent sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <h1>{fullNameUser.toUpperCase()}</h1>
          <Card sx={cardStyle}>
            <Grid container spacing={2} sx={{ marginTop: '2rem'}}>
              <Grid xs={12} sm={6} component="div">
                <TextField label="Nome" fullWidth value={formState.name} onChange={handleInputChange} />
              </Grid>
              <Grid xs={12} sm={6} component="div">
                <TextField label="Sobrenome" fullWidth value={formState.secondName} onChange={handleInputChange} />
              </Grid>
              <Grid xs={12} sm={6} component="div">
                <TextField label="Celular" fullWidth value={formState.cellphone} onChange={handleInputChange} />
              </Grid>
              <Grid xs={12} sm={6} component="div">
                <TextField label="Cep" fullWidth value={formState.zipCode} onChange={handleInputChange} />
              </Grid>
              <Grid xs={12} sx={{ alignContent: 'center' }}>
                <TextField label="Email" fullWidth value={formState.email} onChange={handleInputChange}/>
              </Grid>
              <Grid xs={12} sx={{ alignContent: 'center', marginTop: '2rem' }}>
                <LoadingButton variant="contained" color="primary" sx={{ width: 180}}>
                  Salvar
                </LoadingButton>
              </Grid>
            </Grid>
          </Card>
        </CardContent>
      </Container>
    </>
  );
};

export default Profile;
