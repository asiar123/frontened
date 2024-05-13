import React, { useEffect } from 'react';
import MapComponent from './components/MapComponent';
import socket from './Socket';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const id_usuario = localStorage.getItem('id_usuario');

  useEffect(() => {
    console.log('Socket connected in HomePage:', socket.connected);
  }, []);

  // Styles
  const iconsContainerStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000 // Ensure icons are above the map
  };

  const iconLinkStyle = {
    marginLeft: '10px', // Space between icons
    color: 'black', // Icon color
    fontSize: '24px' // Icon size
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div style={iconsContainerStyle}>
        <Link to="/user" style={iconLinkStyle}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/users-list" style={iconLinkStyle}>
          <FontAwesomeIcon icon={faUsers} />
        </Link>
        <Link to="/chat" style={iconLinkStyle}>
          <FontAwesomeIcon icon={faComment} />
        </Link>
      </div>
      <MapComponent id_usuario={id_usuario} />
    </div>
  );
};

export default HomePage;
