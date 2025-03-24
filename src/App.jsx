import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </>
  );
};

export default App;
