import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Inputs = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-10 lg:gap-0">
      <Search />
      <Filter />
    </div>
  );
};

export default Inputs;
