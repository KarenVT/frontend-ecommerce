import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AdminPanel = () => {
  const { getUsers, updateUser, deleteUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    try {
      const usersList = getUsers();
      setUsers(usersList);
    } catch (err) {
      setError(err.message);
    }
  }, [getUsers]);

  const handleEdit = (user) => {
    setEditUser({
      ...user,
      password: '' // No mostrar la contraseña actual
    });
  };

  const handleEditChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setError('');
    setSuccess('');
    
    try {
      const userData = { ...editUser };
      
      // Si no se proporciona una nueva contraseña, eliminarla del objeto
      if (!userData.password) {
        delete userData.password;
      }
      
      updateUser(editUser.id, userData);
      
      // Actualizar la lista de usuarios
      setUsers(getUsers());
      setEditUser(null);
      setSuccess('Usuario actualizado correctamente');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = (userId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        deleteUser(userId);
        setUsers(getUsers());
        setSuccess('Usuario eliminado correctamente');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Panel de Administración</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-4">Usuarios registrados</h3>
          
          {editUser ? (
            <div className="bg-gray-50 p-4 rounded mb-4">
              <h4 className="text-md font-medium mb-3">Editar Usuario</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={editUser.name}
                    onChange={handleEditChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editUser.email}
                    onChange={handleEditChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Nueva Contraseña (dejar en blanco para mantener la actual)</label>
                  <input
                    type="password"
                    name="password"
                    value={editUser.password}
                    onChange={handleEditChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Rol</label>
                  <select
                    name="role"
                    value={editUser.role}
                    onChange={handleEditChange}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="visualizador">Visualizador</option>
                    <option value="administrador">Administrador</option>
                  </select>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <button
                    onClick={handleUpdate}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    onClick={() => setEditUser(null)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Nombre</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Rol</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4 capitalize">{user.role || 'visualizador'}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:text-blue-800 mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 