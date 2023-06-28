import { useEffect, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { Card, CardContent, TextField, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import NavBar from '../../Componentes/Navbar';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { LoadingButton } from '@mui/lab';
import { Container } from '@mui/system';

import UserService from '../../services/userService';
import { FormState, ProfileProps, initialState } from './types';
import { cardStyle, errorIconStyle, errorStyle } from './styles';

interface ProfileYupProps {
  email: string;
}

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [ state, setState] = useState<ProfileProps>({ content: '' });
  const [formState, setFormState] = useState<FormState>(initialState);
  

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileYupProps>({
    resolver: yupResolver(validationSchema),
  });

  // useEffect(() => {
  //   UserService.getPublicContent()
  //     .then((response) => {
  //       setState({
  //         content: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       setState({
  //         content:
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString(),
  //       });
  //     });
  // }, [id]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const fullNameUser = `${formState.name} ${formState.secondName}`;

  return (
    <>
    <NavBar />
      <Container>
        <CardContent sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <h1>{fullNameUser.toUpperCase()}</h1>
          <Card sx={cardStyle}>
            <Grid container spacing={2} sx={{ marginTop: '2rem'}}>
              <Grid xs={12} sm={6} component="div">
                <TextField 
                  label="Nome" 
                  fullWidth 
                  defaultValue={formState.name} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid xs={12} sm={6} component="div">
                <TextField 
                  label="Sobrenome" 
                  fullWidth 
                  defaultValue={formState.secondName} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid xs={12} sm={6} component="div">
                <TextField 
                  label="Celular" 
                  fullWidth 
                  defaultValue={formState.cellphone}
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid xs={12} sm={6} component="div">
                <TextField 
                  label="Cep" 
                  fullWidth 
                  defaultValue={formState.zipCode} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid xs={12} sx={{ alignContent: 'center' }}>
                <TextField 
                  label="Email" 
                  type='email' 
                  fullWidth 
                  defaultValue={formState.email} 
                  {...register('email')}
                />
                {errors.email && (
                  <Box sx={errorStyle}>
                    <ErrorIcon sx={errorIconStyle}/>
                    {errors.email.message}
                  </Box>
                )}
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
