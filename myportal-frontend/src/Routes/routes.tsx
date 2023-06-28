import { Route, Routes } from "react-router";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { RequireAuth } from "../Contexts/RequireAuth/RequireAuth";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<RequireAuth><Home/></RequireAuth>} />
            <Route path='/profile/:id' element={<Profile />} />
        </Routes>
    )
  }
  
  export default AppRouter;