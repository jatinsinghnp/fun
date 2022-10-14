import React from "react";
import Nav from "./components/Nav";

import Home from "./components/HomePage";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
