import { useEffect, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

import { Card, CardContent, TextField, Box, Button, Modal, Collapse, Alert, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import ErrorIcon from '@mui/icons-material/Error';
import NavBar from '../../Componentes/Navbar';
import Grid from '@mui/system/Unstable_Grid/Grid';
import CloseIcon from '@mui/icons-material/Close';

import { FormState, ProfileProps, initialState } from './types';
import { buttonStyle, cardStyle, errorIconStyle, errorStyle } from './styles';
import AuthService from '../../services/auth';

const Profile = () => {
const [ state, setState] = useState<ProfileProps>({ 
  content: '',
  successful: false,
  message: '' 
});
const [formState, setFormState] = useState<FormState>(initialState);
const [open, setOpen] = useState(true);
  

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório!')
      .email('Digite um email válido'),
    name: Yup.string()
      .required('Campo obrigatório!'),
    secondName: Yup.string()
      .required('Campo obrigatório!'),
    cellphone: Yup.string()
      .required('Campo obrigatório!'),
    zipCode: Yup.string()
      .required('Campo obrigatório!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
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

  const handleClose = () => setOpen(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleUpdateUser = (formData: FormState) => {
    const { name, secondName, cellphone, zipCode, email } = formData;

    setState((prevState) => ({
      ...prevState,
      message: 'Usuário atualizado com sucesso!',
      successful: false,
    }));

    AuthService.updateUser( name, secondName, cellphone, zipCode, email )
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          message: response.data.message,
          successful: true,
        }));
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setState((prevState) => ({
          ...prevState,
          successful: false,
          message: resMessage,
        }));
      });
  };

  const { successful, message } = state;

  const fullNameUser = `${formState.name} ${formState.secondName}`;

  return (
    <>
    <NavBar />
      <Container>
        <CardContent sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <h1>{fullNameUser.toUpperCase()}</h1>
          <Card sx={cardStyle}>
            <Box 
              component='form'
              onSubmit={handleSubmit(handleUpdateUser)}
              noValidate
              autoComplete='off'
            >
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
                    error={!!errors.email}
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
                  <Button 
                    type='submit'
                    disableRipple
                    sx={buttonStyle}
                  >
                    Salvar
                  </Button>

                  {message && (
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby='modal-modal-title'
                      aria-describedby='modal-modal-description'
                    >
                      <Box
                        sx={{
                          position: 'absolute' as const,
                          top: '8%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 400,
                        }}
                      >
                        <Collapse in={open}>
                          {successful ? (
                            <Alert
                              severity='success'
                              action={
                                <IconButton
                                  aria-label='close'
                                  color='inherit'
                                  size='small'
                                  onClick={() => {
                                    setOpen(false);
                                  }}
                                >
                                  <CloseIcon fontSize='inherit' />
                                </IconButton>
                              }
                            >
                              {message}
                            </Alert>
                          ) : (
                            <Alert
                              severity='error'
                              action={
                                <IconButton
                                  aria-label='close'
                                  color='inherit'
                                  size='small'
                                  onClick={() => {
                                    setOpen(false);
                                  }}
                                >
                                  <CloseIcon fontSize='inherit' />
                                </IconButton>
                              }
                            >
                              {message}
                            </Alert>
                          )}
                        </Collapse>
                      </Box>
                    </Modal>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Card>
        </CardContent>
      </Container>
    </>
  );
};

export default Profile;
