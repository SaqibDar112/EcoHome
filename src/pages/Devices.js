import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
// import plusImage from './plus.jpeg';
import '../css/devices.css';
import Appliances from './MyAppliances';

const MyDevices = () => {
  const [ selectedDevices ,setSelectedDevices] = useState([]);

  const handleAddDevice = (device) => {
    if (!selectedDevices.some(d => d.name === device.name)) {
      setSelectedDevices([...selectedDevices, device]);
    }
  };
  return (
   <div className='row justify-content-start'>
    <h2 className='text-start p-3'>Your devices</h2>
    <Appliances onAddDevice={handleAddDevice}/>   
   </div>
  );
};
export default MyDevices;