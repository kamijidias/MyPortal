import { useContext } from "react"
import { AuthContext } from "../Auth/AuthContext"

import Login from "../../Pages/Login";

export const RequireAuth = ({ children }: { children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />
    }

    return children;
}