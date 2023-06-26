import { useAuth } from '../Context/AuthProvider/useAuth';

export const ProtectedRouter = ({ children }: {children: JSX.Element}) => {

  const auth = useAuth();

  if (!auth.email) {
    return (
      <h1>You don't have access</h1>
    )
  }

  return children;
};