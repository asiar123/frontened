import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChatBot() {
    return (
        <div className="d-flex flex-column" style={{ height: '90vh', width: '100%' }}>
            {/* Botón de regreso */}
            <div className="p-2">
                <Link to="/home" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faArrowLeft} /> Regresar
                </Link>
            </div>

            {/* Contenido del chat */}
            <div className="flex-grow-1 d-flex">
                {/* Panel de conversaciones */}
                <div className="flex-grow-1 border-right p-2" style={{ overflowY: 'auto' }}>
                    <h3 className="text-center">Radio-taxis</h3>
                    {/* Lista simulada de conversaciones */}
                    <div className="d-flex align-items-center border-bottom p-2">
                        <img src="avatar1.jpg" alt="Avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                        <div>
                            <strong>Contacto 1</strong>
                            <div className="text-muted">Último mensaje enviado</div>
                        </div>
                    </div>
                    {/* Repite para otros contactos */}
                </div>

                {/* Panel de chat */}
                <div className="flex-grow-2 p-2">
                    <h3 className="text-center">Chat</h3>
                    <div className="flex-grow-1 overflow-auto">
                        {/* Mensajes simulados */}
                        <div className="m-2 text-left bg-light p-2 rounded">
                            <strong>Remitente:</strong> Hola, ¿cómo estás?
                        </div>
                        {/* Repite para otros mensajes */}
                    </div>
                    <div className="d-flex border-top mt-auto p-2">
                        <input className="form-control me-2 rounded-pill" placeholder="Escribe un mensaje..." />
                        <button className="btn btn-success rounded-pill" style={{ width: '100px' }}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBot;
