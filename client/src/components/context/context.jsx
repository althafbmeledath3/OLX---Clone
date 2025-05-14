
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [authState, setAuthState] = useState({
    email: localStorage.getItem('email') || null,
    profilePicture: localStorage.getItem('profilePicture') || null,
  });

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      localStorage.setItem('email', user.email);
      localStorage.setItem('profilePicture', user.picture || null);
      setAuthState({ email: user.email, profilePicture: user.picture });
    } else if (!isAuthenticated && !isLoading) {
      localStorage.removeItem('email');
      localStorage.removeItem('profilePicture');
      setAuthState({ email: null, profilePicture: null });
    }
  }, [isAuthenticated, user, isLoading]);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);