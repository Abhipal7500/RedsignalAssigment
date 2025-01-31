import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleRegistration from './components/VehicleRegistration';
import SimulationPage from './components/SimulationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VehicleRegistration />} />
                <Route path="/simulation" element={<SimulationPage />} />
            </Routes>
        </Router>
    );
}

export default App;
