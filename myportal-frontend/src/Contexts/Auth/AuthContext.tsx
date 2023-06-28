import { createContext } from 'react';
import IUser from '../../types/user';

export type AuthContextProps = {
    user: IUser | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(null!);