import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import MyDevices from './Devices';
import Card from './Card';
import Appliances from './MyAppliances';
import { isAuthenticated } from '../api/UserApi';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const HomePage = () => {

  let { user, token } = isAuthenticated();

  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const [weatherType, setWeatherType] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');

  const [selectedDevices, setSelectedDevices] = useState([]);

  const handleAddDevice = (device) => {
    if (!selectedDevices.some(d => d.name === device.name)) {
      setSelectedDevices([...selectedDevices, device]);
    }
  };
  const getWeatherDetails = (temperature, weatherMain) => {
    if (weatherMain === "Clear") {
      if (temperature > 30) {
        return { type: "Too Hot", icon: "too-hot-icon.png" };
      } else if (temperature > 20) {
        return { type: "Sunny", icon: "sunny-icon.png" };
      } else if (temperature < 10) {
        return { type: "Cold", icon: "cold-icon.png" };
      } else {
        return { type: "Clear Sky", icon: "clear-sky-icon.png" };
      }
    } else if (weatherMain === "Rain") {
      return { type: "Rainy", icon: "rainy-icon.png" };
    } else if (weatherMain === "Clouds") {
      return { type: "Cloudy", icon: "cloudy-icon.png" };
    } else if (weatherMain === "Snow") {
      return { type: "Snowy", icon: "snowy-icon.png" };
    } else if (weatherMain === "Wind") {
      return { type: "Windy", icon: "windy-icon.png" };
    } else {
      return { type: "Unknown", icon: "unknown-icon.png" };
    }
  };

  const fetchTemperature = async () => {
    try {
      const apiKey = '51053368308a5e06d16c98b56e5b9bc2';

      if (lat && lon) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );

        const temp = response.data.main.temp;
        const weatherMain = response.data.weather[0].main; // Get the main weather condition
        setTemperature(temp);

        // Get weather type and corresponding icon
        const weatherDetails = getWeatherDetails(temp, weatherMain);
        setWeatherType(weatherDetails.type);
        setWeatherIcon(weatherDetails.icon);
      }
    } catch (error) {
      console.error("Error fetching temperature data:", error);
      setError('Failed to fetch temperature data. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError('Unable to access your location. Please enable location services and try again.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (lat && lon) {
      fetchTemperature();
    }
  }, [lat, lon, fetchTemperature]);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <div className='container-fluid'>
        <Navbar />
        <div className='row mt-1'>
          <div className='col-md-3 bg-info userInfo-parent-color'>
            <div className="shadow-lg userInfo-color pb-3 mx-4 px-4 d-flex align-items-center">
              <i className="bi bi-person-fill fs-3 me-2"></i>
              {user &&
                <div className="text-center mt-3">
                  <p className="mb-0">Hello,</p>
                  <h5 className="mb-0">{user.firstname}</h5>
                </div>}
              {!user &&
                <Link to={'/login'}> <button className='btn btn-primary'>Login</button></Link>
              }
            </div>
          </div>
          <div className='col-md-9'>
            <div className="temperature-section w-100">
              <div className="temperature-details">
                <p>Phagwara, Punjab</p>
                <p className='fs-5'>{weatherType}</p>
              </div>
              <div className="temperature-value">
                {temperature}°C
              </div>
            </div>
          </div>


        </div>
        <div className='row'>
          <div className='col-4'>
            <Sidebar />
          </div>
          <div className='col-8'>
            <MyDevices />
          </div>
        </div>
        <div className='row justify-content-start'>
          <div className='d-flex flex-column'>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;