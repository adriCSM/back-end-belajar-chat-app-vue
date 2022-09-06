require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

/** */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**Connection DB */
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`connecton database mongodb successfully`);
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use('/api', require('./router/routes'));

/**=========== */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'));
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    });
}

const port = process.env.PORT || 80;

/**RUN Server */
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

/**connection socket */
io.on('connection', (socket) => {
    console.log(`socket io connected`);

    socket.on('allUser', (e) => {
        socket.broadcast.emit('users', e);
    });

    socket.on('kirim-pesan', (isiPesan) => {
        socket.broadcast.emit('pesan', isiPesan);
    });

    socket.on('id', (id) => {
        socket.broadcast.emit('idUser', id);
    });
    socket.on('offline', (id) => {
        socket.broadcast.emit('off', id);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
