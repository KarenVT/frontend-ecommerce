import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import InputText from '../common/InputText';

const Profile = () => {
  const { user, logout, updateUser, deleteUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: '' // Contraseña vacía por defecto
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const updateData = { ...formData };
      
      // Si no se proporciona una nueva contraseña, eliminarla del objeto
      if (!updateData.password) {
        delete updateData.password;
      }
      
      updateUser(user.id, updateData);
      setSuccess('Perfil actualizado correctamente');
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/iniciosesion');
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteAccount = () => {
    try {
      deleteUser(user.id);
      // No necesitamos hacer logout manualmente, ya que deleteUser lo hace automáticamente
      navigate('/iniciosesion');
    } catch (err) {
      setError(err.message);
      setShowDeleteConfirmation(false);
    }
  };

  const cancelDeleteAccount = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-secondary text-white p-6">
            <h2 className="text-3xl font-bold">Mi Perfil</h2>
            <p className="mt-2 opacity-90">Gestiona tu información personal</p>
          </div>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4 mx-6">
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-4 mx-6">
              <p>{success}</p>
            </div>
          )}

          {showDeleteConfirmation && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-4">¿Estás seguro?</h3>
                <p className="text-gray-600 mb-6">
                  Esta acción eliminará permanentemente tu cuenta y todos tus datos. Esta acción no se puede deshacer.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={cancelDeleteAccount}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={confirmDeleteAccount}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Eliminar cuenta
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sección izquierda - Avatar e info */}
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-40 h-40 rounded-lg flex flex-col items-center justify-center mb-4 overflow-hidden border-2 border-hover1 shadow shadow-hover1">
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-gray-500 mt-1">{user.role}</p>
                  
                </div>

                {user.role === "administrador" && (
                  <button
                    onClick={() => navigate("/admin")}
                    className="mt-6 bg-button1 text-white py-2 px-4 rounded-md hover:bg-hover2 transition w-52"
                  >
                    Panel de Administración
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition w-52"
                >
                  Cerrar Sesión
                </button>

                {user.role === "visualizador" && (
                  <button
                    onClick={handleDeleteAccount}
                    className="mt-4 bg-red-100 text-red-700 py-2 px-4 rounded-md hover:bg-red-200 transition w-52"
                  >
                    Eliminar Cuenta
                  </button>
                )}
              </div>

              {/* Sección derecha - Datos del perfil */}
              <div className="md:w-2/3">
                <div className="pb-4 mb-6 ">
                  <div className=" mx-auto flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">
                      Información Personal
                    </h3>
                    {!isEditing && (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="text-secondary hover:underline flex items-center"
                      >
                        Editar
                      </button>
                    )}
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Nombre
                        </label>
                        <InputText
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Email
                        </label>
                        <InputText
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Nueva contraseña
                        </label>
                        <InputText
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="dejar en blanco para mantener la actual"
                        />
                      </div>

                      <div className="flex space-x-4 pt-2">
                        <button
                          type="submit"
                          className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90"
                        >
                          Guardar Cambios
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditing(false);
                            setFormData({
                              name: user.name,
                              email: user.email,
                              password: "",
                            });
                          }}
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Nombre:</span>
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Email:</span>
                        <span className="font-medium">{user.email}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-24">Rol:</span>
                        <span className="font-medium capitalize">
                          {user.role}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 