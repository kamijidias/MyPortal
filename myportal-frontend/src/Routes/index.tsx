import { Navigate, Route } from "react-router";

const isAuthenticated = (): boolean => {
    return localStorage.getItem("token") !== null;
};
  
const ProtectedRoute: React.FC<{ path: string; element: React.ReactNode }> = ({
    path,
    element: Component,
    }) => {
    if (isAuthenticated()) {
        return <Route path={path} element={Component} />;
    } else {
        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;

//IMPLEMENTAR QUANDO EXITIR O LOGIN E O TOKEN, ASSIM PODENDO FAZER AS ROTAS FICAREM SEGURAS, CASO ALGUEM TENTE ACESSAR PELA URL ELE REDIRECIONA PARA O LOGIN;