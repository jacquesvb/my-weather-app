export interface CurrentWeather {
  current_weather: CurrentWeatherData;
}

export interface CurrentWeatherData {
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}
