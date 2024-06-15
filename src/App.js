import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header>
        <h1>Weather App</h1>
        <button onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main>
        <WeatherDisplay />
      </main>
    </div>
  );
};

export default App;
