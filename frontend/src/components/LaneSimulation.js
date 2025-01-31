import React, { useState, useEffect } from 'react';
import { updateVehicleLane } from '../services/vehicleService';
import './LaneSimulation.css'; 

const LaneSimulation = ({ vehicleId, initialLane }) => {
    const [currentLane, setCurrentLane] = useState(initialLane);  
    const [color, setColor] = useState(['red', 'red', 'red', 'red']);

    useEffect(() => {
        const newColor = ['red', 'red', 'red', 'red'];
        newColor[currentLane - 1] = 'green';
        setColor(newColor);
        const interval = setInterval(() => {
            let newLane = (currentLane % 4) + 1;
            setCurrentLane(newLane);
            
            const updatedColor = ['red', 'red', 'red', 'red'];
            updatedColor[newLane - 1] = 'green';
            setColor(updatedColor);

            updateVehicleLane(vehicleId, newLane);
        }, 2000);
        return () => clearInterval(interval);
    }, [currentLane, vehicleId]);

    return (
        <div className="lane-container">
            {color.map((laneColor, index) => (
                <div
                    key={index}
                    className={`lane lane-${index + 1}`}
                    style={{ backgroundColor: laneColor }}
                >
                    Lane {index + 1}
                </div>
            ))}
        </div>
    );
};

export default LaneSimulation;
