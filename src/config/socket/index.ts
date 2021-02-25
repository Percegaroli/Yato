import socketIo from 'socket.io-client';

const socket = socketIo(process.env.NEXT_PUBLIC_API_URL);
socket.emit('connection');

export default socket;
