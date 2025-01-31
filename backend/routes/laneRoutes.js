const express = require('express');
const router = express.Router();
const laneController = require('../controllers/laneController');

router.post('/update', laneController.updateVehicleLane);

module.exports = router;
