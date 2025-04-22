import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Función para asegurarse de que exista el administrador por defecto
  const ensureAdminExists = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verificar si ya existe un administrador con el email predefinido
    const adminExists = storedUsers.some(user => user.email === 'admin@email.com');
    
    if (!adminExists) {
      // Crear el administrador predeterminado
      const defaultAdmin = {
        id: 'admin-' + Date.now(),
        name: 'Administrador',
        email: 'admin@email.com',
        password: '123456',
        role: 'administrador'
      };
      
      // Añadir el administrador y guardar
      storedUsers.push(defaultAdmin);
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }
  };

  useEffect(() => {
    // Verificar si hay un usuario en localStorage al cargar la página
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    // Asegurarse de que exista el administrador predeterminado
    ensureAdminExists();
    
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

    // Todos los usuarios nuevos tendrán rol de visualizador
    const role = "visualizador";

    // Crear nuevo usuario
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role
    };

    // Guardar en el array de usuarios
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Guardar sesión actual
    const sessionUser = { id: newUser.id, name, email, role };
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
      email: foundUser.email,
      role: foundUser.role || "visualizador" // Por defecto asignar visualizador si no tiene rol
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

  // Obtener todos los usuarios (solo para administradores)
  const getUsers = () => {
    if (user?.role !== 'administrador') {
      throw new Error('No tienes permisos para ver esta información');
    }
    return JSON.parse(localStorage.getItem('users') || '[]');
  };

  // Modificar un usuario (para administradores y para visualizadores que editen su propia cuenta)
  const updateUser = (userId, userData) => {
    // Verificar si es administrador o el usuario está editando su propia cuenta
    if (user?.role !== 'administrador' && user?.id !== userId) {
      throw new Error('No tienes permisos para modificar usuarios');
    }
    
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = storedUsers.map(u => 
      u.id === userId ? { ...u, ...userData } : u
    );
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Si el usuario modificado es el actual, actualizar la sesión
    if (user.id === userId) {
      const updatedSessionUser = { ...user, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedSessionUser));
      setUser(updatedSessionUser);
    }
    
    return updatedUsers.find(u => u.id === userId);
  };

  // Eliminar un usuario (para administradores y para visualizadores que eliminen su propia cuenta)
  const deleteUser = (userId) => {
    // Verificar si es administrador o el usuario está eliminando su propia cuenta
    if (user?.role !== 'administrador' && user?.id !== userId) {
      throw new Error('No tienes permisos para eliminar usuarios');
    }
    
    // No permitir eliminar al propio usuario administrador
    if (user.role === 'administrador' && user.id === userId) {
      throw new Error('No puedes eliminar tu propia cuenta de administrador');
    }
    
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const filteredUsers = storedUsers.filter(u => u.id !== userId);
    
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    
    // Si el usuario se está eliminando a sí mismo, cerrar sesión
    if (user.id === userId) {
      logout();
    }
    
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        register,
        login,
        logout,
        getUsers,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 