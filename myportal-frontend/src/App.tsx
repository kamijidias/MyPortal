import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';

const App = () => {
  return (
    <div className='container mt-3'>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
