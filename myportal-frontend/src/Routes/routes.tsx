import React from 'react';
import Login from "../Pages/Login";
import Register from '../Pages/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from '../Pages/ForgotPassword';
import Home from '../Pages/Home';
import { ProtectedRouter } from './ProtectedRoutes';
import { AuthProvider } from '../Context/AuthProvider';

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path="/home" element={<ProtectedRouter><Home/></ProtectedRouter>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;