import api from './api';

const UserService = {
  getPublicContent() {
    return api.get('/test/all/');
  },

  getUserBoard() {
    return api.get('/test/user');
  },
};

export default UserService;