import { Routes, Route } from "react-router";
import { Dashboard } from "./components/Dashboard";
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { DetailCharacter } from "./components/DetailCharacter";
import { DetailPlanet } from "./components/DetailPlanet";



export const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/people/:id" element={<DetailCharacter />} />
        <Route path="/planets/:id" element={<DetailPlanet />} />
      </Routes>
    </>
  );
};
