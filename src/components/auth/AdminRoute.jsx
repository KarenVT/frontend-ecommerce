import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const AdminRoute = () => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);

  // Mientras se carga la autenticación, no mostramos nada
  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">Cargando...</div>;
  }

  // Si no está autenticado, redirigir a inicio de sesión
  if (!isAuthenticated) {
    return <Navigate to="/iniciosesion" replace />;
  }

  // Si no es administrador, redirigir al perfil
  if (user.role !== 'administrador') {
    return <Navigate to="/perfil" replace />;
  }

  // Si es administrador, mostrar los componentes hijos
  return <Outlet />;
};

export default AdminRoute; 