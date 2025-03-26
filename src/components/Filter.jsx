import React, { useState, useEffect } from "react";
import Continents from "./Continents";

const Filter = ({ filterValue, setFilterValue }) => {
  const [defaultValue, setDefaultValue] = useState("Filter by region");
  const [showOptions, setShowOptions] = useState(false);

  // Filter countries by region
  useEffect(() => {
    console.log(filterValue);
  }, [filterValue]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-60 py-4 pr-5 pl-7 
        bg-white dark:bg-dark-blue shadow-sm rounded-md
        cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{defaultValue}</span>
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
          setFilterValue={setFilterValue}
          setShowOptions={setShowOptions}
          setDefaultValue={setDefaultValue}
        />
      )}
    </div>
  );
};

export default Filter;
