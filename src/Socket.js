// socket.js
import io from 'socket.io-client';
const socket = io('https://backend-ocba.onrender.com/', { reconnection: true });
export default socket;