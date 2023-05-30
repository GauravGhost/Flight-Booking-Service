const express = require('express');

const { InfoController,} = require('../../controllers');
const BookingRoutes = require('./booking-routes');
const router = express.Router();

router.use('/bookings', BookingRoutes)
router.get('/info', InfoController.info);

module.exports = router;