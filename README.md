# SkyCast - Find My Weather
## Date:21/07/25
## Objective:
To build a responsive single-page application using React that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API. This project demonstrates the use of Axios for API calls, React Router for navigation, React Hooks for state management, controlled components with validation, and basic styling with CSS.
## Tasks:

#### 1. Project Setup
Initialize React app.

Install necessary dependencies: npm install axios react-router-dom

#### 2. Routing
Set up BrowserRouter in App.js.

Create two routes:

/ – Home page with input form.

/weather – Page to display weather results.

#### 3. Home Page (City Input)
Create a controlled input field for the city name.

Add validation to ensure the input is not empty.

On valid form submission, navigate to /weather and store the city name.

#### 4. Weather Page (API Integration)
Use Axios to fetch data from the OpenWeatherMap API using the city name.

Show temperature, humidity, wind speed, and weather condition.

Convert and display temperature in both Celsius and Fahrenheit using useMemo.

#### 5. React Hooks
Use useState for managing city, weather data, and loading state.

Use useEffect to trigger the Axios call on page load.

Use useCallback to optimize form submit handler.

Use useMemo for temperature conversion logic.

#### 6. UI Styling (CSS)
Create a responsive and clean layout using CSS.

Style form, buttons, weather display cards, and navigation links.

## Programs:
### App.jsx
```js
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import HomeComponent from './Weather/HomeComponents'
import WeatherComponent from './Weather/WeatherComponent'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/weather"}>Weather</Link>
            </li>
          </ul>
        </NavLink>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route path="/weather" element={<WeatherComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
```
### WeatherComponent.jsx
```js

import React, { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const API_KEY = "d160e2908c7d4290a75180856252107";

const WeatherComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const city = location.state?.city || "";

  useEffect(() => {
    if (!city) {
      navigate("/");
      return;
    }

    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      .then((res) => {
        setWeatherData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("City not found or API error.");
        setLoading(false);
      });
  }, [city, navigate]);

  const temperature = useMemo(() => {
    if (!weatherData) return { celsius: "", fahrenheit: "" };
    const celsius = weatherData.current.temp_c;
    const fahrenheit = (celsius * 9) / 5 + 32;
    return { celsius, fahrenheit };
  }, [weatherData]);

  if (loading) {
    return <div className="weather-container">Loading...</div>;
  }

  if (error) {
    return (
      <div className="weather-container">
        <p className="error">{error}</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="weather-container">
      <h2>Weather in {weatherData.location.name}</h2>
      <div className="weather-card">
        <p>Condition: {weatherData.current.condition.text}</p>
        <p>
          Temperature: {temperature.celsius.toFixed(1)}°C /{" "}
          {temperature.fahrenheit.toFixed(1)}°F
        </p>
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Wind Speed: {weatherData.current.wind_mph} mph</p>
      </div>
      <button onClick={() => navigate("/")}>Search Another City</button>
    </div>
  );
};

export default WeatherComponent;

```
### HomeComponent.jsx
```js
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!city.trim()) {
        setError("Please enter a city name");
        return;
      }
      navigate("/weather", { state: { city } });
    },
    [city, navigate]
  );

  return (
    <div className="home-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default HomeComponent;
```
## Output:
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/a83bafe0-8828-430b-9a60-21fcec1d5c58" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/a8c21079-901f-428e-b230-836986b8a4f3" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c3ff85d3-194b-4779-87da-863fa4c70d25" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/5a95a80c-4427-4ff9-b22c-2ac76d16e713" />
<img width="1919" height="1078" alt="image" src="https://github.com/user-attachments/assets/31bd006e-6016-4f48-850c-776a9f9f02ac" />

## Result:
A responsive single-page application using React that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API has been built successfully. 
