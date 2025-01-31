require('dotenv').config();

const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');
const laneRoutes = require('./routes/laneRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/lane', laneRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
