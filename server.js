const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (your HTML, CSS, JS)
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('sendMessage', (msg) => {
        io.emit('receiveMessage', msg);  // Broadcast message to all clients
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
