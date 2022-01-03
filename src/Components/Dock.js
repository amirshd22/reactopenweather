import React, { useState } from "react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "75c10f679078c5f263f4657b9e74798e";

const Dock = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const getWeather = async (city) => {
    const { data } = await axios.get(URL, {
      params: {
        q: city,
        units: "metric",
        APPID: API_KEY,
      },
    });
    setWeather(data);
    console.log(weather);
  };

  return (
    <div className="dock">
      <h1>وضعیت آب و هوا با سیاوش دلخوش</h1>
      <div className="form-input">
        <input
          type="text"
          className="input"
          onChange={(text) => setCity(text.target.value)}
        />
        <button onClick={() => getWeather(city)} className="bn632-hover bn26">
          جستوجو کنید
        </button>
        {weather.main ? (
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="weatherIcon"
            />
            <div className="name">{weather.weather[0].main}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dock;
