import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Inputs = ({
  filterValue,
  setFilterValue,
  setSearchValue,
  setContries,
}) => {
  return (
    <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-10 lg:gap-0">
      <Search setSearchValue={setSearchValue} />
      <Filter
        setContries={setContries}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </div>
  );
};

export default Inputs;
