import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  });

  const navigate = useNavigate(); // useNavigate will work only if it's wrapped in a Router context

  const login = (token, user) => {
    setAuth({ token, user });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuth({ token: null, user: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login'); // navigate will now work properly
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};