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
