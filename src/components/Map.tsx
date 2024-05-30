import MapLoading from "../images/Loading_map.jpg";

export type MapStats = {
  lon: number;
  lat: number;
};

export type PropsMapStats = {
  lon: number;
  lat: number;
  isLoad?: boolean;
};

export default function CreateMap(props: PropsMapStats) {
  let map = "";
  if (props.isLoad) {
    map = MapLoading;
  } else {
    map =
      "https://static-maps.yandex.ru/1.x/?lang=en-US&ll=" +
      props.lon +
      "," +
      props.lat +
      "&z=9&l=map&size=600,300";
  }
  return (
    <div className="grid grid-cols-1 place-items-center w-full py-3">
      <div className="bg-gradient-to-r from-blue-500  to-indigo-700 w-6/12">
        <div className="grid grid-cols-2 place-items-center">
          <img width="600" src={map} className="border-4 border-indigo-600" />
          <div>
            <a
              className="bg-gradient-to-r from-indigo-700  to-indigo-900  px-8 py-4 border-radius rounded-2xl text-6xl text-white hover:bg-purple-400"
              target="_blank"
              href={
                "https://yandex.com/maps/?pt=" +
                props.lon +
                "," +
                props.lat +
                "&z=8&l=map"
              }
            >
              Full Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
