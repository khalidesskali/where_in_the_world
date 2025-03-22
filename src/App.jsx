import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

const App = () => {
  return (
    <div className="text-very-dark-blue dark:text-white dark:bg-very-darkmode-blue">
      <Header />
      <main className="p-4 h-100 bg-very-light-gray dark:bg-very-dark-blue">
        <Inputs />
      </main>
    </div>
  );
};

export default App;
