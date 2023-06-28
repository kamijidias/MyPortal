import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './Contexts/Auth/AuthProvider';

import { CssBaseline } from '@mui/material';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
          <CssBaseline />
            <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);


