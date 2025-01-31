const Lane = require('../models/Lane');

exports.updateVehicleLane = (req, res) => {
    const { vehicle_id, newLane } = req.body;
    Lane.updateVehicleLane(vehicle_id, newLane, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error updating lane' });
        } else {
            res.status(200).json({ message: 'Vehicle lane updated successfully' });
        }
    });
};
