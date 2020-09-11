const { io } = require('../index');
// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
    client.on('mensaje', (payload) => {
        console.log('¡Mensaje!', payload.nombre);
        io.emit('mensaje', { admin: 'Nuevo Mensajitoo para los clientes' });
    });
}
);