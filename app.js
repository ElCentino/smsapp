const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const indexRoute = require('./routes');
require('./models/connection');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {

    console.log(`Request from ${req.ip} at ${req.url}`)
    next();
});

app.use('/', indexRoute);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000).once('listening', err => {

    if (err) throw err;

    console.log(`Server running on port ${server.address().port}`);
});
