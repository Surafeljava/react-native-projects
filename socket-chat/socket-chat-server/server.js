const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// const cors = require('cors');

// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // For legacy browser support
// }

// app.use(cors(corsOptions));


// let users = [];
// let messages = [];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        // messages.push(data);
        io.emit('message', data);
    });
});

server.listen(4000, () => {
    console.log('Listening on port 4000')
});