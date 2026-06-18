import { useState } from 'react';
import './App.css';
import AddVehicleButton from './components/AddVehicleButton';
import VehicleCard from './components/VehicleCard';
import VehicleTypeSelector from './components/VehicleTypeSelector';

function App() {
  const [vehicleType, setVehicleType] = useState('');

  return (
    <div>
      <h1>AutoCare</h1>
      <AddVehicleButton onClick={() => {}} />
      <VehicleCard currentKm={1000} name="Honda titan" />
      <VehicleTypeSelector onChange={setVehicleType} value={vehicleType} />
    </div>
  );
}

export default App;
