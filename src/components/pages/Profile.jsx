import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/iniciosesion');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Mi Perfil</h2>
        
        <div className="bg-blue-50 p-4 mb-6 rounded-md">
          <p className="text-blue-700 font-medium text-center">
            ¡Bienvenido, {user.name}!
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">Nombre</p>
            <p className="font-medium">{user.name}</p>
          </div>
          
          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          
          <div className="border-b pb-2">
            <p className="text-sm text-gray-500">Rol</p>
            <p className="font-medium capitalize">{user.role}</p>
          </div>
          
          {user.role === 'administrador' && (
            <div className="mt-6">
              <button
                onClick={() => navigate('/admin')}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mb-2"
              >
                Ir al Panel de Administración
              </button>
            </div>
          )}
          
          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full bg-secondary text-white py-2 rounded-md hover:text-secondary hover:bg-hover1 transition"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 