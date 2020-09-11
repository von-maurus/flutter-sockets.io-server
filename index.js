const express = require('express');
const path = require('path');
require('dotenv').config();

// con esta linea creo la app express para escuchar peticiones
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path público
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
// la App puede escuchar desde el puerto 3000
server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en el puerto!', process.env.PORT);
});