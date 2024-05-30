import axios from "axios";

const API_KEY = import.meta.env.VITE_FORWARD_GEOCODING as string;
const BASE_URL = "https://geocode.maps.co/search?q=";

const API = axios.create({
  baseURL: BASE_URL,
});

export const getLocationData = (locationQuery: string) =>
  API.get(`${locationQuery}&api_key=${API_KEY}`).then(({ data }) =>
    data.filter((item: { class: string }) => item.class === "boundary")
  );

// export const getLocationData = async (locationQuery: string) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}${encodeURIComponent(locationQuery)}&api_key=${API_KEY}`
//     );
//     const data = await response.json();
//     if (data && data.length > 0) {
//       // console.log(data);
//       const filteredData = data.filter(
//         (item: { class: string }) => item.class === "boundary"
//       );
//       return filteredData;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error("Error during geocode:", error);
//     return [];
//   }
// };

// import axios from "axios";

// const baseURL = "https://jsonplaceholder.typicode.com";

// const API = axios.create({
//   baseURL,
// });

// export const getPosts = () => API.get("/posts").then(({ data }) => data);
// export const getPostById = (id) =>
//   API.get(`/posts/${id}`).then(({ data }) => data);
