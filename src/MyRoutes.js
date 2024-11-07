import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import HelpSection from './pages/HelpSection';
import ElectricityConsumption from './components/ElectricityConsumption';
import RedeemCoins from './components/RedeemCoin';
import Login from './pages/Login';
import Register from './pages/Register';
import Appliances from './pages/MyAppliances';
import Card from './pages/Card';
import DeviceSelector from './pages/MyAppliances';
import Footer from './components/Footer';

const MyRoutes = () => {
  const [addedDevices, setAddedDevices] = useState([]);

  
  const handleAddDevice = (device) => {
    if (!addedDevices.some(d => d.name === device.name)) {
      setAddedDevices([...addedDevices, device]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage addedDevices={addedDevices} />} />

        <Route path='/nav' element={<Navbar />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/help' element={<HelpSection />} />
        <Route path='/elec-consumption' element={<ElectricityConsumption />} />
        <Route path='/redeemcoins' element={<RedeemCoins />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/my-appliances' element={<Appliances onAddDevice={handleAddDevice} />} />
        <Route path='/card' element={<Card />} />
        <Route path='/device' element={<DeviceSelector />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default MyRoutes;