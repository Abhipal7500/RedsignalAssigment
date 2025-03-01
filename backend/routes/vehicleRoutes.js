const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/register', vehicleController.registerVehicle);
router.get('/', vehicleController.getAllVehicles);

module.exports = router;
