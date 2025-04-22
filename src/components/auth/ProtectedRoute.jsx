import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Mientras se carga la autenticación, no mostramos nada
  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">Cargando...</div>;
  }

  // Si no está autenticado, redirigir a inicio de sesión
  if (!isAuthenticated) {
    return <Navigate to="/iniciosesion" replace />;
  }

  // Si está autenticado, mostrar los componentes hijos
  return <Outlet />;
};

export default ProtectedRoute; 