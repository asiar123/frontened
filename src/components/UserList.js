import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios

  useEffect(() => {
    // Función para obtener los usuarios del backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://192.168.1.7:7000/api/auth/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsers(data); // Actualizar el estado con la lista de usuarios
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchUsers();
  }, []); // El arreglo vacío asegura que este efecto se ejecute solo una vez

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id_usuario}>{user.nombre} - {user.email}</li> // Ajusta estos campos según tu modelo de usuario
        ))}
      </ul>
    </div>
  );
}

export default UserList;
