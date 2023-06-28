import api from './api'
import TokenService from './token';

const AuthService = {
  login: async (username: string, password: string) => {
    const response = await api
      .post('/auth/signin', {
        username,
        password
      });
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
    return response.data;
  },

  logout: () => {
    TokenService.removeUser();
  },

  sendEmail: (email: string, message: string, confirmEmail?: string) => {
    return api.post('/email/send', {
      email,
      confirmEmail,
      message
    });
  },

  updateUser: (
    name: string, 
    secondName: string, 
    cellphone: string, 
    zipCode: string, 
    email: string, 
    ) => {
    return api.post('/profile/update', {
      name,
      secondName,
      cellphone,
      zipCode,
      email,
    });
  },

  register: ( email: string, password: string, confirmPassword: string) => {
    return api.post('/auth/signup', {
      email,
      password,
      confirmPassword
    });
  },

  getCurrentUser: () => {
    return TokenService.getUser();
  }
};

export default AuthService;