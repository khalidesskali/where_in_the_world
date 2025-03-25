import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Inputs = ({ setSearchValue, countries, setContries }) => {
  return (
    <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-10 lg:gap-0">
      <Search
        countries={countries}
        setContries={setContries}
        setSearchValue={setSearchValue}
      />
      <Filter countries={countries} setContries={setContries} />
    </div>
  );
};

export default Inputs;
