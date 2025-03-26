import React, { useState } from "react";

const Continents = ({ setFilterValue, setShowOptions, setDefaultValue }) => {
  const [options, setOptions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  return (
    <div className="absolute bg-white dark:bg-dark-blue shadow-sm rounded-md w-60 mt-1 p-4 pl-7">
      {options.map((option, index) => {
        return (
          <div
            className="cursor-pointer w-fit"
            key={index}
            onClick={() => {
              setFilterValue(option);
              setDefaultValue(option);
              setShowOptions(false);
            }}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default Continents;
