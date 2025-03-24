import React, { useState } from "react";
import Continents from "./Continents";

const Filter = () => {
  const [continent, setContinent] = useState("Filter by region");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-60 py-4 pr-5 pl-7 bg-white dark:bg-dark-blue shadow-sm rounded-md
        cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{continent}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {showOptions && (
        <Continents
          setContinent={setContinent}
          setShowOptions={setShowOptions}
        />
      )}
    </div>
  );
};

export default Filter;
