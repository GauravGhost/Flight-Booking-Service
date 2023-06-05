const amqplib = require('amqplib');


let connection, channel;

async function connectQueue() {
    try {
        connection = await amqplib.connect("amqp://localhost");
        channel = await connection.createChannel();
        await channel.assertQueue('notification-queue');
    } catch (error) {
        console.log(error);
    }
}

async function sendData(data) {
    try {
        await channel.sendToQueue("notification-queue", Buffer.from(JSON.stringify(data)));
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    connectQueue,
    sendData
}