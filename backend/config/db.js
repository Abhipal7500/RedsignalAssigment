const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL server');
    db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }

        db.query(`USE ${process.env.DB_NAME}`, (err) => {
            if (err) {
                console.error('Error selecting database:', err);
                return;
            }

            const createVehiclesTable = `
                CREATE TABLE IF NOT EXISTS vehicles (
                    vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
                    lane INT NOT NULL
                )
            `;
            const createLanesTable = `
                CREATE TABLE IF NOT EXISTS lanes (
                    lane_id INT PRIMARY KEY AUTO_INCREMENT,
                    status VARCHAR(20) NOT NULL
                )
            `;

            db.query(createVehiclesTable, (err) => {
                if (err) {
                    console.error('Error creating vehicles table:', err);
                    return;
                }
             
            });

            db.query(createLanesTable, (err) => {
                if (err) {
                    console.error('Error creating lanes table:', err);
                    return;
                }
            
            });
        });
    });
});

module.exports = db;
