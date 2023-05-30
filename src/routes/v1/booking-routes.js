const express = require('express');
const router = express.Router();

const { BookingController } = require('../../controllers');


// /api/v1/bookings POST
router.post('/',
    BookingController.createBooking
);


module.exports = router;