import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://backend-ocba.onrender.com/api/auth/users', { // Asegúrate de usar la URL correcta
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
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Lista de Conductores</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id_usuario}>
              <td>{user.id_usuario}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
