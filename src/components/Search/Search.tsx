import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { getLocationData } from "../../services/locationService";
import { locationPropsType } from "../../types";

const Search = (location: locationPropsType) => {
  const [addressSearch, setAddressSearch] = useState("");
  const [results, setResults] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  console.log("location:", location);

  const handleSearch = async () => {
    try {
      const data = await getLocationData(addressSearch);
      if (data && data.length > 0) {
        setResults(data);
        console.log("location data:", results);
      }
    } catch (error) {
      console.error("Error during geocode:", error);
    }
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation(`${latitude}, ${longitude}`);
        console.log("Current location:", currentLocation);
      },
      (error) => {
        console.error("Error during geolocation:", error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          value={addressSearch}
          onChange={(e) => setAddressSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="search by address..."
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className="cursor-pointer transmission ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transmission ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div>
        {results.length > 0 && (
          <ul>
            {results.map((result: locationPropsType) => (
              <li key={result.placeId}>{result.displayName}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
