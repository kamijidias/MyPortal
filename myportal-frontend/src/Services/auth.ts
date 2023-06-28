import api from './api'
import TokenService from './token';

const AuthService = {
  login: async (email: string, password: string) => {
    const response = await api
      .post('/login', {
        email,
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

  sendEmail: (email: string, confirmEmail?: string) => {
    return api.post('/forgot-password/send', {
      email,
      confirmEmail,
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