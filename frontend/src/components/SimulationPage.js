import React, { useState, useEffect } from 'react';
import { getAllVehicles } from '../services/vehicleService';
import LaneSimulation from './LaneSimulation';
import './SimulationPage.css';

const SimulationPage = () => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [initialLane, setInitialLane] = useState(1);

    useEffect(() => {
        getAllVehicles(setVehicles);
    }, []);

    const handleVehicleSelect = (vehicleId) => {
        const selected = vehicles.find(vehicle => vehicle.vehicle_id === parseInt(vehicleId));

        if (selected) {
            setInitialLane(selected.lane);
        } else {
            console.log("Vehicle not found");
        }

        setSelectedVehicle(vehicleId);
    };

    return (
        <div>
            <select onChange={(e) => handleVehicleSelect(e.target.value)} value={selectedVehicle}>
                <option value="">Select a Vehicle</option>
                {vehicles.map((vehicle) => (
                    <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
                        Vehicle {vehicle.vehicle_id} - Lane {vehicle.lane}
                    </option>
                ))}
            </select>

    
            {selectedVehicle && <LaneSimulation key={selectedVehicle} vehicleId={selectedVehicle} initialLane={initialLane} />}
        </div>
    );
};

export default SimulationPage;
