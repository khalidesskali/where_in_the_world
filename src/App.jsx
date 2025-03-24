import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Countries from "./components/Countries";

const App = () => {
  return (
    <div className="text-very-dark-blue dark:text-white dark:bg-very-darkmode-blue">
      <Header />
      <main className="p-4 bg-very-light-gray dark:bg-very-darkmode-blue">
        <Inputs />
        <Countries />
      </main>
    </div>
  );
};

export default App;
