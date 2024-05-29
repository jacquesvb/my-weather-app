import { useState } from "react";
import Search from "./components/Search";
import Select from "./components/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

export default function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  // Location state
  const [location, setLocation] = useState({
    placeId: 0,
    lat: "0",
    lon: "0",
    displayName: "",
    locationClass: "",
    locationType: "",
    importance: 0,
  });

  // Weather state
  const [weather, setWeather] = useState({
    temperature: 0,
    description: "",
    windSpeed: 0,
    windDirection: 0,
    humidity: 0,
    pressure: 0,
    visibility: 0,
    sunrise: 0,
    sunset: 0,
  });

  // Current weather state
  const [currentWeather, setCurrentWeather] = useState({
    location,
    weather,
  });

  // Saved locations state
  const [savedLocations, setSavedLocations] = useState([]);

  // Units state
  const [units, setUnits] = useState("imperial");

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-600 via-yellow-400 to-green-600 h-[100vh] w-full">
      <h1 className="text-3xl text-slate-800 font-bold underline">
        <Search {...location} />
      </h1>
      <h1 className="text-3xl text-slate-800 font-bold underline">
        <Select options={options} value={value} onChange={(o) => setValue(o)} />
      </h1>
    </main>
  );
}

// Default to user's location. If not location found or blocked, use Boring, Oregon.
// State: Current location. Array of Saved Locations. Units
// 1. Use navigator.geolocation to get user's location
// 2. If location is found, use Reverse Geeocoding to get location information
// 3. If location is not found, default to Boring, Oregon
// 4. Get weather information for location
// 5. Display weather information
// 6. Allow user to save location
// 7. Allow user to change units
// 8. Allow user to delete location
// 9. If user clicks on saved location, get new weather information and display it
// 10. If user changes units, convert temperature and wind speed
