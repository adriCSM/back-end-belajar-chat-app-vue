require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 80;

/** */
app.use(express.json());
app.use(cors());

app.use('/api', require('./router/routes'));

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
http.createServer(app).listen(port, () => {
    console.log(`http://localhost:${port}`);
});
