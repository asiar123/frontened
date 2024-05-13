import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css'; 

const Register = () => {
  const [id_usuario, setIdUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setpassword] = useState("");
  const [foto, setFoto] = useState(null);
  const [tipo, setTipo] = useState('');  // Estado para el tipo
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!id_usuario || !nombre || !password || !foto || !tipo) {
      setError("Por favor, complete todos los campos.");
      return;
    }
  
    const formData = new FormData();
    formData.append('id_usuario', id_usuario);
    formData.append('nombre', nombre);
    formData.append('password', password);
    formData.append('tipo', tipo);  // Agregar tipo al FormData
    if (foto) {
      formData.append('foto', foto);
    }
  
    try {
      const response = await axios.post("https://192.168.1.7:7000/api/auth/register", formData);
      alert(`Usuario creado: ${response.data.nombre}`);
      navigate('/');
    } catch (error) {
      const errorMessage = error.response ? error.response.data : "Error de red o respuesta no recibida";
      setError(errorMessage);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Registro de usuario</h2>
        <label>
          ID de usuario:
          <input type="text" value={id_usuario} onChange={(e) => setIdUsuario(e.target.value)} />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        </label>
        <label>
          Foto:
          <input type="file" onChange={(e) => setFoto(e.target.files[0])} />
        </label>
        <label>
          Tipo:
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Seleccione un tipo</option>
            <option value="tipo1">Operadora</option>
            <option value="tipo2">Conductor</option>
            <option value="tipo3"></option>
          </select>
        </label>
        <input type="submit" value="Registrarse" />
        <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
      </form>
    </div>
  );
};

export default Register;
