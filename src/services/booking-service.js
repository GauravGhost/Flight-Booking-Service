const axios = require('axios');
const { StatusCodes } = require('http-status-codes')
const { ServerConfig } = require('../config')
const { BooingRepository } = require('../repositories')
const db = require('../models');
const AppError = require('../utils/errors/app-error');

async function createBooking(data) {
    return new Promise((resolve, reject) => {

        const result = db.sequelize.transaction(async function bookingImp(t) {
            const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`)
            const flightData = flight.data.data;
            if (data.noOfSeats > flightData.totalSeats) {
                reject(new AppError("Not Enough Seats Available", StatusCodes.BAD_REQUEST));
            }
            resolve(true)
        });
    });
}

module.exports = {
    createBooking
}