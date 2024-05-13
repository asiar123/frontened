// socket.js
import io from 'socket.io-client';
const socket = io('https://192.168.1.7:7000', { reconnection: true });
export default socket;