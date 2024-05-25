export default function App() {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-600 via-yellow-400 to-green-600 h-[100vh] w-full">
      <h1 className="text-3xl text-slate-800 font-bold underline">
        Hello World!
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
