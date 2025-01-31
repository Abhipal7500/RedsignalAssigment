import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerVehicle } from '../services/vehicleService';
import './VehicleRegistration.css'; // Import the CSS file

const VehicleRegistration = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [lane, setLane] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const vehicleData = { vehicle_id: vehicleId, lane };
        registerVehicle(vehicleData).then(() => {
            navigate('/simulation');
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Vehicle ID (Integer type Only)"
                    value={vehicleId}
                    onChange={(e) => setVehicleId(e.target.value)}
                    required
                />
                <select onChange={(e) => setLane(parseInt(e.target.value))} value={lane}>
                    <option value={1}>Lane 1</option>
                    <option value={2}>Lane 2</option>
                    <option value={3}>Lane 3</option>
                    <option value={4}>Lane 4</option>
                </select>
                <button type="submit">Register Vehicle</button>
            </form>
        </div>
    );
    
    
};

export default VehicleRegistration;
