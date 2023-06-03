const { StatusCodes } = require('http-status-codes');

const { Booking } = require('../models');
const CrudRepository = require('./crud-repository');

class BookingRepository extends CrudRepository {
    constructor() {
        super(Booking);
    }
    async create(data, transaction) {
        const response = await Booking.create(data, { transaction: transaction });
        return response;
    }

    async get(data, transaction) {
        const response = await this.model.findByPk(data);
        if (!response) {
            throw new AppError("Not able to fund the resource", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async update(id, data, transaction) {  // data -> {col: value, ....}
        const response = await this.model.update(data, {
            where: {
                id: id
            }
        }, { transaction: transaction });
        if (response[0] === 0) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

}

module.exports = BookingRepository;