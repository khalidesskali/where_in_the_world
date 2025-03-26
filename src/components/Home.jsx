import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Countries from "./Countries";

const Home = () => {
  const [countries, setContries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const getContries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setContries(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getContries();
  }, []);

  // If there is a filter value add it to the
  const filteredCountries = countries.filter((country) =>
    filterValue
      ? country.name.common.toLowerCase().startsWith(searchValue) &&
        country.region === filterValue
      : country.name.common.toLowerCase().startsWith(searchValue)
  );

  return (
    <div className="text-very-dark-blue dark:text-white dark:bg-very-darkmode-blue">
      <main
        className="main p-4 bg-very-light-gray dark:bg-very-darkmode-blue"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <Inputs
          countries={countries}
          setContries={setContries}
          setSearchValue={setSearchValue}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <Countries
          filteredCountries={filteredCountries}
          countries={countries}
        />
      </main>
    </div>
  );
};

export default Home;
