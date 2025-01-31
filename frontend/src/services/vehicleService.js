import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/vehicles';
export const registerVehicle = async (vehicleData) => {
    try {
        await axios.post(`${BASE_URL}/register`, vehicleData);
        alert('Vehicle registered');
    } catch (err) {
        console.error('Error registering vehicle', err);
    }
};
export const getAllVehicles = async (setVehicles) => {
    try {
        const response = await axios.get(BASE_URL);
        setVehicles(response.data.vehicles);
    } catch (err) {
        console.error('Error fetching vehicles', err);
    }
};
export const updateVehicleLane = async (vehicleId, newLane) => {
    try {
        await axios.post('http://localhost:5000/api/lane/update', { vehicle_id: vehicleId, newLane });
    } catch (err) {
        console.error('Error updating vehicle lane', err);
    }
};
