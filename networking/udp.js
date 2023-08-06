const dgram = require("node:dgram");

const socket = dgram.createSocket('udp4');



socket.bind(5513, '127.0.0.1', () => {
    console.log("socket connected");
});

socket.on('message', (message) => {
    console.log('message : ', message.toString())
})