const Vehicle = require('../models/Vehicle');

exports.registerVehicle = (req, res) => {
    const { vehicle_id, lane } = req.body;
    Vehicle.create({ vehicle_id, lane }, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error registering vehicle' });
        } else {
            res.status(200).json({ message: 'Vehicle registered successfully' });
        }
    });
};

exports.getAllVehicles = (req, res) => {
    Vehicle.getAll((err, vehicles) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching vehicles' });
        } else {
            res.status(200).json({ vehicles });
        }
    });
};
