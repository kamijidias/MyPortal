import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';

const App = () => {
  return (
    <>
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<h1>esqueceu</h1>} />
          <Route path='/register' element={<h1>deseja se cadastrar</h1>} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
