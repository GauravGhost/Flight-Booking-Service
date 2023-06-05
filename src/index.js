const express = require('express');

const { ServerConfig, Logger, Queue } = require('./config');
const apiRoutes = require('./routes')
const CRONS = require('./utils/common/cron-jobs');



const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRoutes);
// app.use('/bookingService/api', apiRoutes);

app.listen(ServerConfig.PORT, async ()=> {
    console.log(`Server has started in ${ServerConfig.PORT}`);
    Logger.info("successfully started the server", "root", {})
    CRONS();
    await Queue.connectQueue();
    console.log("queue connected")
})