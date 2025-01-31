const db = require('../config/db');

const Lane = {
    updateVehicleLane: (vehicleId, newLane, callback) => {
        const query = `UPDATE vehicles SET lane = ? WHERE vehicle_id = ?`;
        db.query(query, [newLane, vehicleId], callback);
    }
};

module.exports = Lane;
