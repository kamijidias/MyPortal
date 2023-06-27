import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Container,
  Box,
  FormControl,
  TextField,
  Button,
  Alert,
  Modal,
  Collapse,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import AuthService from '../../services/auth';

type RegisterProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

type State = {
  successful: boolean;
  message: string;
};

const Register: React.FC<object> = () => {
  const [state, setState] = useState<State>({
    successful: false,
    message: '',
  });

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório!')
      .email('Digite um email válido'),
    password: Yup.string()
      .required('Campo obrigatório!')
      .min(8, 'A senha precisa conter 8 caracteres')
      .max(40, 'Senha excede o máximo de 40 caracteres'),
    confirmPassword: Yup.string()
    .required('Campo obrigatório')
    .test('password-match', 'Senha não são compatíveis!', function (value) {
      return value === this.parent.password;
    })
    .min(8, 'Senha não são compatíveis!')
    .max(40, 'Senha excede o máximo de 40 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(validationSchema),
  });

  const handleRegister = (formData: RegisterProps) => {
    const { email, password, confirmPassword } = formData;

    setState((prevState) => ({
      ...prevState,
      message: '',
      successful: false,
    }));

    AuthService.register( email, password, confirmPassword)
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

  const form = {
    maxWidth: '360px',
    height: '450px',
    f: 20,
    p: '40px',
    mt: '40px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    boxShadow: '6',
    flexDirection: 'column',
  };

  const error = {
    height: 0,
    color: 'red',
    fontSize: 12,
    mb: '5px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={form}>
        <FormControl
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '300px',
          }}
        >
          <Box
            component='form'
            onSubmit={handleSubmit(handleRegister)}
            sx={{
              '& .MuiTextField-root': { m: 1.8, width: '35ch' },
              height: '350px',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignContent: 'space-between',
            }}
            noValidate
            autoComplete='off'
          >
            <Box sx={{ height: '100%' }}>
              <Box>
                <TextField
                  error={!!errors.email}
                  id='outlined-email-input'
                  label='Email'
                  type='email'
                  {...register('email')}
                />
                {errors.email && (
                  <Box sx={error}>
                    <ErrorIcon sx={{ mr: 0.5, ml: 1.5, width: '15px' }} />
                    {errors.email.message}
                  </Box>
                )}
              </Box>
              <Box>
                <TextField
                  error={!!errors.password}
                  id='outlined-password-input'
                  label='Senha'
                  type='password'
                  {...register('password')}
                />
                {errors.password && (
                  <Box sx={error}>
                    <ErrorIcon sx={{ mr: 0.5, ml: 1.5, width: '15px' }} />
                    {errors.password.message}
                  </Box>
                )}
              </Box>
              <Box>
                <TextField
                  error={!!errors.confirmPassword}
                  id='outlined-confirmPassword-input'
                  label='Confirme sua senha'
                  type='password'
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <Box sx={error}>
                    <ErrorIcon sx={{ mr: 0.5, ml: 1.5, width: '15px' }} />
                    {errors.confirmPassword.message}
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                type='submit'
                disableRipple
                sx={{
                  width: '315px',
                  height: '50px',
                  bgcolor: '#000000',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: '#000000',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <span>Cadastrar</span>
              </Button>
            </Box>

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
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Register;
