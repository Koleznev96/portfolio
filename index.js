const {function_start} = require('./src/functional/functional');

const server = require('./app');
const socketIO = require('socket.io');
port = process.env.PORT || 5000;

global.io = socketIO(server);

global.io_data = [];

io.on('connection', (client) => {
    let delete_index = -1;
    io_data.forEach((item, index) => {
        if (item.login === client.handshake.query.login) {
            delete_index = index;
        }
    });
    if (delete_index !== -1) {
        io_data.splice(delete_index, 1);
    }
    io_data.push({socket_id: client.id, login: client.handshake.query.login})
});

server.listen(port,  () => console.log(`Server start, port = ${port}`));

const start = async () => {
    await function_start();
    setInterval(async () => {
        await function_start();
    }, 7200000);
}

start();
