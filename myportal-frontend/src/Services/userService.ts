import api from './api';

const UserService = {
  getUserLoged() {
    return api.get('/user');
  },

};

export default UserService;