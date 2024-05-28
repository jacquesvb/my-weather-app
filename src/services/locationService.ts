const API_KEY = import.meta.env.VITE_FORWARD_GEOCODING as string;
const BASE_URL = "https://geocode.maps.co/search?q=";

export const getLocationData = async (locationQuery: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}${encodeURIComponent(locationQuery)}&api_key=${API_KEY}`
    );
    const data = await response.json();
    if (data && data.length > 0) {
      // console.log(data);
      const filteredData = data.filter(
        (item: { class: string }) => item.class === "boundary"
      );
      return filteredData;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error during geocode:", error);
    return [];
  }
};
