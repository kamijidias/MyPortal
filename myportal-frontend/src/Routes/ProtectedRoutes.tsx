import {FC, ReactNode} from 'react'
import UserServices from "../Services/UserServices";
import AppRouter from "./routes";

const userService = new UserServices();

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
    console.log(children)
    const authenticatedUser = userService.userAuth();
    return authenticatedUser ? <>{children}</> : <AppRouter />;
};

export default ProtectedRoutes;