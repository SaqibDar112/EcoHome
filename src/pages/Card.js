import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Appliances from './MyAppliances';

const dataMonthly = [
  { name: 'January', Power: 450, Water: 200 },
  { name: 'February', Power: 300, Water: 150 },
  { name: 'March', Power: 500, Water: 250 },
  { name: 'April', Power: 400, Water: 200 },
  { name: 'May', Power: 600, Water: 260 },
  { name: 'June', Power: 450, Water: 230 },
];

const dataDaily = [
  { time: '00:00', Power: 10, Water: 5 },
  { time: '01:00', Power: 15, Water: 7 },
  { time: '02:00', Power: 20, Water: 10 },
  { time: '03:00', Power: 25, Water: 12 },
  { time: '04:00', Power: 30, Water: 15 },
  { time: '05:00', Power: 35, Water: 17 },
  { time: '06:00', Power: 40, Water: 20 },
  { time: '07:00', Power: 45, Water: 22 },
  { time: '08:00', Power: 50, Water: 25 },
];

const dataPie = [
  { name: 'Fridge', value: 120 },
  { name: 'Washing Machine', value: 150 },
  { name: 'Oven', value: 50 },
  { name: 'TV', value: 200 },
  { name: 'Air Conditioner', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Dashboard = () => {
    const [ selectedDevices ,setSelectedDevices] = useState([]);

    const handleAddDevice = (device) => {
      if (!selectedDevices.some(d => d.name === device.name)) {
        setSelectedDevices([...selectedDevices, device]);
      }
    };
  return (
    <div className='d-flex flex-column'>
         {/* <Appliances onAddDevice={handleAddDevice}/> */}
         <div className="device-container">
            <div className="selected-devices">
              {selectedDevices.map((device, index) => (
                <div key={index} className="col-md-4">
                  <div className="card device-card">
                    <img src={device.imgSrc} alt={device.name} className="card-img-top rounded-circle device-image" />
                    <div className="card-body text-center">
                      <h5 className="card-title">{device.name}</h5>
                      <p className="card-text">
                        Power: {device.power} kWh <br />
                        Water: {device.water} L
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

     <div className='d-flex justify-content-center'>
        <div className='flex-item- w-50'>
        <h2>Monthly Consumption</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataMonthly} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Power" fill="#8884d8" />
          <Bar dataKey="Water" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

     <div className='flex-item w-100'>
     <h2>Daily Consumption Pattern</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataDaily} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Power" stroke="#8884d8" />
          <Line type="monotone" dataKey="Water" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

     </div>
        </div>
     </div>
      <h2>Appliance Power Consumption Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={dataPie} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;