import React from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem('auth') ?? null);

  function login(data) {
    setAuth(data);
    localStorage.setItem('auth', data);
  }

  function logout() {
    localStorage.removeItem('auth');
    setAuth('');
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
