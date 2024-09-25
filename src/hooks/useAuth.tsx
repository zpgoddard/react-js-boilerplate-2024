import { React, createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage.tsx';
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
  /**  React componenet to wrap authentication around. */
  children: React.ReactNode;
}

interface inputData {
  username: string,
  password: string,
}

const AuthContext = createContext();
const BACK_INT = -1; // How much we need to go back in history to get to the original page the user wanted to get to before being redirected to login.

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useLocalStorage('user', {username: '', userId: '', isLoggedIn: false});
  const navigate = useNavigate();

  const logIn = async (inputData: inputData) => {
    // authentication call here
    setUser({username: inputData.username, userId: 'U-1234', isLoggedIn: true});
    navigate(BACK_INT);
  };

  const logOut = () => {
    setUser({username: '', userId: '', isLoggedIn: false});
    navigate('/login', { replace: true });
  };

  const value = useMemo(() => ({ user, logIn, logOut }), [user] );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);