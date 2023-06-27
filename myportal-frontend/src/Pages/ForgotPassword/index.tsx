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

import { ForgotPassowodProps, State } from './types';
import { boxSubmitStyle, errorIconStyle, errorStyle, formStyle } from './styles';

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
    confirmEmail: Yup.string()
      .required('Campo obrigatório!')
      .test('email-match', 'Os emails não são compatíveis!', function (value) {
        return value === this.parent.email;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassowodProps>({
    resolver: yupResolver(validationSchema),
  });

  const handleSendEmail = (formData: ForgotPassowodProps) => {
    const { email, confirmEmail } = formData;

    setState((prevState) => ({
      ...prevState,
      message: 'Email enviado com sucesso, verifique sua caixa de mensagens',
      successful: false,
    }));

    AuthService.sendEmail( email, confirmEmail)
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
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '300px',
          }}
        >
          <Box
            component='form'
            onSubmit={handleSubmit(handleSendEmail)}
            sx={boxSubmitStyle}
            noValidate
            autoComplete='off'
          >
            <Box sx={{ height: '100%' }}>
              <Box>
                <TextField
                  error={!!errors.email}
                  id='outlined-email-input'
                  label='Digite seu email'
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
                  error={!!errors.confirmEmail}
                  id='outlined-confirmEmail-input'
                  label='Confirme seu email'
                  type='email'
                  {...register('confirmEmail')}
                />
                {errors.confirmEmail && (
                  <Box sx={errorStyle}>
                    <ErrorIcon sx={errorIconStyle} />
                    {errors.confirmEmail.message}
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
                <span>Enviar email</span>
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
