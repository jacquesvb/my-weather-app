import { useState } from "react";

const OtherCity = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      {loading ? (
        <div className="bg-gradient-to-r from-purplle-500 to-indigo-700 my-2.5 rounded-2xl shadow-md shadow-black w-11/12 h-40 text-white tablet:w-11/12">
          <h1 className="text-white text-5xl text-center font-Poppins">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-700 my-2.5 bg-opacity-70 rounded-2xl shadow-md shadow-black w-11/12 h-40 text-white tablet:w-10/12">
          <h1 className="text-white text-5xl text-center font-Poppins tablet:text-3xl dexktop:text-7xl">
            City Name
          </h1>
          <h1 className="text-white text-7xl text-center font-Poppins my-4 tablet:my-5 tablet:text-5xl desktop:text-6xl">
            City Temperature
          </h1>
        </div>
      )}
    </>
  );
};

export default OtherCity;
