import { useState } from "react";
import { AuthContext } from "./AuthContext"
import IUser from "../../types/user";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: {children: JSX.Element}) => {
    const [user, setUser] = useState<IUser | null>(null);
    const api = useApi();

    const login = async (email: string, password: string) => {
        const data = await api.login(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            return true;
        }
        return false;
    }

    const logout = async () => {
        await api.logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}