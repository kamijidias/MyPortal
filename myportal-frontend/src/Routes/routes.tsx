import React from 'react';
import Login from "../Pages/Login";
import Register from '../Pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from '../Pages/ForgotPassword';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/home' element={<h1>Tela Home</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;