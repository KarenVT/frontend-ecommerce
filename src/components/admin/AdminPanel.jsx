import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import InputSearch from "../common/InputSearch"
import InputText from "../common/InputText"

const AdminPanel = () => {
  const { getUsers, updateUser, deleteUser, user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Obtener la lista de usuarios
  useEffect(() => {
    try {
      const usersList = getUsers();
      setUsers(usersList);
    } catch (err) {
      setError(err.message);
    }
  }, [getUsers]);

  // Manejar la edición de un usuario
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

  // Actualizar un usuario
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

  // Filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container  max-w-6xl px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Panel de Administración
          </h1>
          <p className="text-gray-600 mt-1">
            Administra los usuarios de la plataforma
          </p>
        </div>
        <button
          onClick={() => navigate("/perfil")}
          className="mt-4 md:mt-0 px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition flex items-center"
        >
          Volver a Perfil
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r">
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-r">
          <p>{success}</p>
        </div>
      )}

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-6 bg-white flex justify-between items-center">
          <h2 className="text-xl text-secondary font-semibold">
            Usuarios Registrados
          </h2>
          <div className="relative">
            <InputSearch
              placeholder="Buscar usuario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Formulario de edición */}
        {editUser && (
          <div className="p-6 border-b border-t border-hover1 bg-white">
            <h3 className="text-lg font-medium mb-4">Editar Usuario</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <InputText
                  type="text"
                  name="name"
                  value={editUser.name}
                  onChange={handleEditChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <InputText
                  type="email"
                  name="email"
                  value={editUser.email}
                  onChange={handleEditChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nueva Contraseña
                </label>
                <InputText
                  type="password"
                  name="password"
                  value={editUser.password}
                  onChange={handleEditChange}
                  placeholder="Dejar en blanco para mantener la actual"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rol
                </label>
                <select
                  name="role"
                  value={editUser.role}
                  onChange={handleEditChange}
                  className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none"
                >
                  <option value="visualizador">Visualizador</option>
                  <option value="administrador">Administrador</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => setEditUser(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleUpdate}
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        )}

        {/* Tabla de usuarios */}
        <div className="overflow-x-auto">
          {filteredUsers.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-button1">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Rol
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((userItem) => (
                  <tr key={userItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                       
                        <div className="ml-4">
                          <div className="text-sm font-medium text-black">
                            {userItem.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-black">
                        {userItem.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          userItem.role === "administrador"
                            ? "bg-hover1 text-secondary"
                            : "bg-hover1 text-secondary"
                        }`}
                      >
                        {userItem.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(userItem)}
                        className="text-emerald-600 hover:text-emerald-900 mr-4"
                      >
                        Editar
                      </button>
                      {userItem.id !== user.id && (
                        <button
                          onClick={() => handleDelete(userItem.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Eliminar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">
                No se encontraron usuarios que coincidan con la búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 