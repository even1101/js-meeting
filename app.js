const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let connectedUsers = [];

io.on('connection', (socket) => {
    connectedUsers.push(socket.id);
    console.log(connectedUsers);
    
    socket.on('pre-offer', (data) => { 
        console.log(data);

        const { callType, calleePersonalCode } = data;
        const connectedUser = connectedUsers.find((userSocketId) => userSocketId === calleePersonalCode);

        if (connectedUser) { 
            const data = {
                callerSocketId: socket.id,
                callType
            };

            io.to(callerSocketId).emit('pre-offer', data);
        }
    });
    
    socket.on('disconnect', () => { 
        console.log('user is disconnected');

        const newConnectedUsers = connectedUsers.filter((userSocketId) => userSocketId!== socket.id);
        connectedUsers = newConnectedUsers;
    });
});

server.listen(PORT, () => {
    console.log('start express server');
});
