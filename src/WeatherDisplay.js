import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const fetchWeatherData = async (loc) => {
    try {
      const apiKey = '73326a484f82cae4465265a75b172e39';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apiKey}`);
      console.log(response.data);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city name or zip code"
      />
      <button onClick={() => fetchWeatherData(location)}>Search</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>Name of the city: {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Date & Time: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
          <p>Climate Status: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
