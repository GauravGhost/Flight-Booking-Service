const cron = require('node-cron');
const bookingService = require('../../services/booking-service')

function scheduleCrons(){
    cron.schedule('*/30 * * * *', async () => {
        await bookingService.cancelOldBookings();
    });
}


module.exports = scheduleCrons;