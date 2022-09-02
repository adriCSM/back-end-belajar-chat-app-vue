require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 80;
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const { Socket } = require('dgram');
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

/** */
app.use(express.json());
app.use(cors());

app.use('/api', require('./router/routes'));

/**=========== */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/'));
    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    });
}

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

/**RUN Server */
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

/**connection socket */
io.on('connection', (socket) => {
    console.log(`socket io connected`);
    console.log(socket.rooms);

    socket.on('kirim-pesan', (isiPesan) => {
        socket.broadcast.emit('pesan', isiPesan);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
