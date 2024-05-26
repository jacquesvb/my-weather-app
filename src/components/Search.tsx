import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

type Props = {
  address: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  handleLocationClick: () => void;
};

const Search = ({
  address,
  handleKeyDown,
  handleSearchClick,
  handleLocationClick,
}: Props) => {
  const [addressSearch, setAddressSearch] = useState(address);
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={addressSearch}
          onChange={(e) => setAddressSearch(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="search by address..."
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearch
          size={30}
          className="cursor-pointer transmission ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transmission ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
    </div>
  );
};

export default Search;
