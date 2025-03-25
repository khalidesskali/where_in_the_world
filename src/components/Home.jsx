import React, { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Countries from "./Countries";

const Home = () => {
  const [countries, setContries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getContries = async () => {
    try {
      const res = await fetch("http://localhost:5173/data.json");
      const data = await res.json();
      setContries(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getContries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchValue)
  );

  return (
    <div className="text-very-dark-blue dark:text-white dark:bg-very-darkmode-blue">
      <main className="p-4 min-h-[calc(100vh - 80px)] bg-very-light-gray dark:bg-very-darkmode-blue">
        <Inputs
          countries={countries}
          setContries={setContries}
          setSearchValue={setSearchValue}
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
