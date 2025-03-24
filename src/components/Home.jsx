import React from "react";
import Inputs from "./Inputs";
import Countries from "./Countries";

const Home = () => {
  return (
    <div className="text-very-dark-blue dark:text-white dark:bg-very-darkmode-blue">
      <main className="p-4 min-h-[calc(100vh - 80px)] bg-very-light-gray dark:bg-very-darkmode-blue">
        <Inputs />
        <Countries />
      </main>
    </div>
  );
};

export default Home;
