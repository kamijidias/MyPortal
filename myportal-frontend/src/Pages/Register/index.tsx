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

import { RegisterProps, State } from './types';
import { boxSubmitStyle, buttonStyle, errorIconStyle, errorStyle, formControlStyle, formStyle } from './styles';

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
    .test('password-match', 'Senhas estão diferentes!', function (value) {
      return value === this.parent.password;
    })
    .min(8, 'Senhas estão diferentes!')
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
      message: 'Usuário cadastrado com sucesso',
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

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={formStyle}>
        <FormControl
          sx={formControlStyle}
        >
          <Box
            component='form'
            onSubmit={handleSubmit(handleRegister)}
            sx={boxSubmitStyle}
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
                  <Box sx={errorStyle}>
                    <ErrorIcon sx={errorIconStyle} />
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
                  <Box sx={errorStyle}>
                    <ErrorIcon sx={errorIconStyle} />
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
                  <Box sx={errorStyle}>
                    <ErrorIcon sx={errorIconStyle} />
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
                sx={buttonStyle}
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
