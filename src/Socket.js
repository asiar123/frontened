// socket.js
import io from 'socket.io-client';
const socket = io('https://frontened-s7n0.onrender.com', { reconnection: true });
export default socket;