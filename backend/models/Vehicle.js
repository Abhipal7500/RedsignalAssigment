const db = require('../config/db');

const Vehicle = {
    create: (vehicleData, callback) => {
        const query = `INSERT INTO vehicles (vehicle_id, lane) VALUES (?, ?)`;
        db.query(query, [vehicleData.vehicle_id, vehicleData.lane], callback);
    },
    getAll: (callback) => {
        const query = `SELECT * FROM vehicles`;
        db.query(query, callback);
    }
};

module.exports = Vehicle;
