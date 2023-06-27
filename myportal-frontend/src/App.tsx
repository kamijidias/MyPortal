import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <>
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
