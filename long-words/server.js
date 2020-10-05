const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const socket = require('socket.io-client')('http://localhost:3030');

app.use(express.static(path.join(__dirname, 'build')));

io.on('connection', socket => {
    socket.on('add-letter', letter => {
        socket.emit('letter-is-added', )
    })
})

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

server.listen(3030, () => {
    console.log('Server is running!');
});