
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
