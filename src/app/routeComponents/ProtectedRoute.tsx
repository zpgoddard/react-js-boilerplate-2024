import { Navigate  } from 'react-router-dom';
import { React } from 'react';
import { useAuth } from '../../hooks/useAuth.tsx';

interface ProtectedRouteProps {
  /**  React componenet to wrap authentication around. */
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  } 
  return children;
};

export default ProtectedRoute;