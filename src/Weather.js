import React, { useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import './App.css';
 
export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [cloudsData, setCloudsData] = useState({});
  const [sysData, setSysData] = useState({});
  const [windData, setWindData] = useState({});
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [location, setLocation] = useState('');
 
  const updateWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
        setWeatherData(res.data.main);
        setCloudsData(res.data.clouds);
        setSysData(res.data.sys);
        setWindData(res.data.wind);
        setWeatherDesc(res.data.weather);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        alert('Error fetching data. Please try again.');
      });
  };
 
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
 
  const weatherIconUrl = `http://openweathermap.org/img/w/${weatherDesc.length > 0 ? weatherDesc[0].icon : ''}.png`;
 
  return (
    <>
    <div>
      <span style={{color:'yellow'}}>
    <div className="container-fluid text-center h" id="main">
        <div className='AA'>
      <div className="row">
        <div className="col-md-4 p-3">
          <h5 style={{color:"white"}}>THE WEATHER<br />FORECASTING</h5>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h5 style={{color:'white'}}>DATE<br />{formatDate(sysData.sunrise)}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input type="text" id="locationInput" className="form-control" placeholder="Enter your city" onChange={(e) => setLocation(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={updateWeather}>Get Data</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h4 className="text-center">CURRENT WEATHER</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
           <h5>{sysData.name}{sysData.country}<br /><img src={weatherIconUrl} alt="" /><br />{formatDate(sysData.sunset)}</h5>
        </div>
        <div className="col-md-4">
          <h5>Temp <br />{Math.round(weatherData.temp - 273.15)} <sup>o</sup>C</h5>
        </div>
        <div className="col-md-4">
          <h4>DESC</h4>
          {weatherDesc.map((x, index) => (
            <h5 key={index}>{x.description} <img src={weatherIconUrl} alt="" /></h5>
          ))}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h4 className="text-center">ALL CONDITIONS</h4>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3">
          <h5>Temp <br />{Math.round(weatherData.temp - 273.15)} <sup>o</sup>C</h5>
        </div>
        <div className="col-md-3">
          <h5>Wind <br />{windData.speed} m/s</h5>
        </div>
        <div className="col-md-3">
          <h5>Clouds <br />{cloudsData.all} %</h5>
        </div>
        <div className="col-md-3">
          <h5>Humidity <br />{weatherData.humidity} %</h5>
        </div>
      </div>
    </div>
    </div>
    </span>
    </div>
  
   </>
  );
}