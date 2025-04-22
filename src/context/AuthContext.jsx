import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un usuario en localStorage al cargar la página
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Función para registrar un usuario
  const register = (name, email, password) => {
    // Validación básica
    if (!name || !email || !password) {
      throw new Error('Todos los campos son obligatorios');
    }
    
    if (password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('El correo electrónico no es válido');
    }

    // Verificar si el correo ya está registrado
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = storedUsers.find(user => user.email === email);
    
    if (existingUser) {
      throw new Error('Este correo electrónico ya está registrado');
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password
    };

    // Guardar en el array de usuarios
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Guardar sesión actual
    const sessionUser = { id: newUser.id, name, email };
    localStorage.setItem('user', JSON.stringify(sessionUser));
    
    setUser(sessionUser);
    setIsAuthenticated(true);
    
    return sessionUser;
  };

  // Función para iniciar sesión
  const login = (email, password) => {
    if (!email || !password) {
      throw new Error('Todos los campos son obligatorios');
    }

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = storedUsers.find(
      user => user.email === email && user.password === password
    );

    if (!foundUser) {
      throw new Error('Credenciales incorrectas');
    }

    // Guardar sesión
    const sessionUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email
    };
    
    localStorage.setItem('user', JSON.stringify(sessionUser));
    setUser(sessionUser);
    setIsAuthenticated(true);
    
    return sessionUser;
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 