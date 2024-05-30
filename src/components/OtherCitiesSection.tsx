import OtherCity from "./OtherCity";

type Coords = {
  id: number;
  name: string;
  Lat: number;
  Lon: number;
};
type OtherWeather = {
  id: number;
  name: string;
  temperature: number;
};
export default function OtherCitiesSection() {
  const coordinates: Coords[] = [
    { id: 0, name: "Miami", Lat: 25.77427, Lon: -80.19366 },
    { id: 1, name: "Paris", Lat: 48.85341, Lon: 2.3488 },
    { id: 2, name: "London", Lat: 51.50853, Lon: -0.12574 },
    { id: 3, name: "Tokyo", Lat: 35.6895, Lon: 139.69171 },
  ];
  return (
    <div className="relative" id="secondSection">
      <h1 className="text-4xl text-white text-center drop-shadow-xl font-Goldman tablet:text-6xl">
        Other cities:
      </h1>
      <div className="grid grid-cols-1 place-items-center  tablet:grid-cols-4 tablet:my-3 ">
        {coordinates.map(({ id }) => (
          <OtherCity
            key={coordinates[id].name}
            cityName={coordinates[id].name}
            Lat={coordinates[id].Lat}
            Lon={coordinates[id].Lon}
          />
        ))}
      </div>
      <br />
    </div>
  );
}
