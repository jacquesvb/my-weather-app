import { useState, useEffect } from "react";
import axios from "axios";
import { CurrentWeather } from "../types/weather";

type CityProps = {
  cityName: string;
  Lat: number;
  Lon: number;
};

const OtherCity = (props: CityProps) => {
  const [cityTemperature, SetCityTemperature] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<CurrentWeather>(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          props.Lat +
          "&longitude=" +
          props.Lon +
          "&hourly=temperature_2m,apparent_temperature,weathercode&current_weather=true&timezone-Europe%2FBerlin"
      )
      .then((resp) => {
        SetCityTemperature(resp.data.current_weather.temperature);
        setLoading(false);
      });
  });
  if (loading) {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 my-2.5 rounded-2xl shadow-md shadow-black w-11/12 h-40 text-white tablet:w-11/12">
        <h1 className="text-white text-5xl text-center font-Goldman">
          Loading...
        </h1>
      </div>
    );
  } else {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 my-2.5 bg-opacity-70 rounded-2xl shadow-md shadow-black w-11/12 h-40 text-white tablet:w-11/12">
        <h1 className="text-white text-5xl text-center font-Goldman tablet:text-3xl desktop:text-7xl">
          {props.cityName}
        </h1>
        <h1 className="text-white text-7xl text-center font-Goldman my-4 tablet:my-5 tablet:text-5xl desktop:text-6xl">
          {cityTemperature}
        </h1>
      </div>
    );
  }
};

export default OtherCity;
