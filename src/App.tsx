import axios from "axios";
import { useState, useEffect } from "react";
import CreateMap, { MapStats } from "./components/Map";
import { CityInfo } from "./types/city";
import { CurrentWeather } from "./types/weather";
import {
  MainSection,
  OtherCitiesSection,
  MiniPanel,
  FindForm,
} from "./components";
import Arrow from "./icons/arrow";

export default function App() {
  const [city, setCity] = useState<string[]>(["Salem", "Oregon"]);
  const [inputValue, setInputValue] = useState<string>(city[0]);
  const [weather, setWeather] = useState<CurrentWeather>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userCityData, setUserCityData] = useState<CityInfo>();
  const [ErrorPanel, setErrorPanel] = useState<boolean>(false);
  const [position, setPosition] = useState<MapStats>({
    lon: -122.797,
    lat: 45.365,
  });

  useEffect(() => {
    FindCity(city[0], 0);
  }, []);

  const getWeather = (lat: number, lon: number) => {
    axios
      .get<CurrentWeather>(
        "https://api.open-meteo.com/v1/forecast?latitude=" +
          lat +
          "&longitude=" +
          lon +
          "&hourly=temperature_2m,apparent_temperature,weathercode&current_weather=true&timezone=Europe%2FBerlin"
      )
      .then((resp) => {
        console.log(resp.data.current_weather);
        setWeather(resp.data);
        setIsLoading(false);
      });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      switch (event.target.value) {
        case "0":
          FindCity(inputValue, 0);
          break;

        case "1":
          FindCity(inputValue, 1);
          break;

        case "2":
          FindCity(inputValue, 2);
          break;

        case "3":
          FindCity(inputValue, 3);
          break;

        case "4":
          FindCity(inputValue, 4);
          break;

        case "5":
          FindCity(inputValue, 5);
          break;
      }
    } catch {
      console.log("error");
    }
  };

  const handleInputChange = (event: { target: HTMLInputElement }) => {
    const inputValue = event.target;
    setInputValue(inputValue.value);
  };

  const FindCity = async (cityname: string, num: number) => {
    setIsLoading(true);

    try {
      axios
        .get<CityInfo>(
          "https://geocoding-api.open-meteo.com/v1/search?name=" + cityname
        )
        .then((resp) => {
          if (resp.data.results) {
            setCity([
              resp.data.results[num].name,
              resp.data.results[num].country,
            ]);
            getWeather(
              resp.data.results[num].latitude,
              resp.data.results[num].longitude
            );
            setUserCityData(resp.data);
            setErrorPanel(false);
            setPosition({
              lon: resp.data.results[num].longitude,
              lat: resp.data.results[num].latitude,
            });
          } else {
            setErrorPanel(true);
          }
        });
    } catch {
      console.log("error");
      setIsLoading(true);
    }
  };

  const Option = (nmbr: number) => {
    let x = "";
    if (userCityData?.results[nmbr]?.name != undefined) {
      x =
        userCityData?.results[nmbr]?.name +
        ", " +
        userCityData?.results[nmbr]?.admin1 +
        ", " +
        userCityData?.results[nmbr]?.country;
    } else {
      x = "No Data";
    }
    return x;
  };

  return (
    <>
      <div className="grid grid-cols-1">
        <FindForm btn={() => FindCity(inputValue, 0)}>
          <>
            <input
              className="peer text-2xl border-b-2 border-white w-9/12 bg-transparent text-white tablet:w-4/12"
              placeholder="Find your city:"
              value={inputValue}
              onChange={handleInputChange}
              list="cityname"
            ></input>
          </>
        </FindForm>
        <h1 className="text-white grid grid-cols-1  place-items-center w-full mx-auto">
          C/F
        </h1>
      </div>

      <div className="h-screen tablet:h-fit">
        <div className="grid grid-cols-1 place-items-center w-full mx-auto ">
          <select
            id="Cities"
            name="Cities"
            onChange={handleSelectChange}
            className="bg-transparent text-white text-1xl tablet:text-2xl"
          >
            <option value={0} className="text-black">
              {Option(0)}
            </option>
            <option value={1} className="text-black">
              {Option(1)}
            </option>
            <option value={2} className="text-black">
              {Option(2)}
            </option>
            <option value={3} className="text-black">
              {Option(3)}
            </option>
            <option value={4} className="text-black">
              {Option(4)}
            </option>
            <option value={5} className="text-black">
              {Option(5)}
            </option>
          </select>
        </div>
        <MainSection>
          <>
            <MiniPanel loading={isLoading} error={ErrorPanel}>
              <>
                <p className="text-4xl text-center text-yellow-200 font-Poppins tablet:text-2xl desktop:text-4xl">
                  City:
                </p>
                <p className="text-5xl text-center text-yellow-400 font-Poppins tablet:text-5xl desktop:text-6xl">
                  {city[0]}{" "}
                </p>
                <p className="text-4xl text-center text-yellow-400 font-Poppins tablet:text-3xl desktop:text-4xl">
                  {city[1]}{" "}
                </p>
              </>
            </MiniPanel>

            <MiniPanel loading={isLoading} error={ErrorPanel}>
              <>
                <p className="text-4xl text-center text-yellow-200 font-Poppins tablet:text-2xl desktop:text-4xl">
                  Temperature:
                </p>
                <br />
                <p className="text-7xl text-center text-yellow-400 font-Poppins tablet:text-5xl desktop:text-7xl">
                  {weather?.current_weather.temperature} °C
                </p>
              </>
            </MiniPanel>

            <MiniPanel loading={isLoading} error={ErrorPanel}>
              <>
                <p className="text-4xl text-center text-yellow-200 font-Poppins tablet:text-2xl desktop:text-4xl">
                  Windspeed:
                </p>
                <br />
                <p className="text-6xl text-center text-yellow-400 font-Poppins tablet:text-5xl desktop:text-6xl">
                  {weather?.current_weather.windspeed} km/h
                </p>
              </>
            </MiniPanel>
          </>
        </MainSection>
        <div className="visible tablet:invisible">
          <a href="#secondSection">
            <Arrow />
          </a>
        </div>
      </div>
      <div className="hidden  desktop:flex ">
        <CreateMap lon={position.lon} lat={position.lat} isLoad={isLoading} />
      </div>
      <br />
      <div className="bg-slate-900 bg-opacity-70 h-full  tablet:h-fit">
        <div className="w-full py-2 h-2 bg-slate-700"> </div>
        <OtherCitiesSection />
        <div className="w-full h-2 bg-slate-700"> </div>
      </div>
    </>
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
