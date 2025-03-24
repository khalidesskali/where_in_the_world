import React, { useState } from "react";

const Continents = ({ setContinent, setShowOptions }) => {
  const [options, setOptions] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Ocenia",
  ]);

  return (
    <div className="absolute bg-white dark:bg-dark-blue shadow-sm rounded-md w-60 mt-1 p-4 pl-7">
      {options.map((option, index) => {
        return (
          <div
            className="cursor-pointer w-fit"
            key={index}
            onClick={() => {
              setContinent(option);
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
