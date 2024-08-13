import React from "react";
import { Routes, Route } from "react-router-dom";
import FilmList from "./pages/FilmList/FilmList";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import "./App.css";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={ <><Hero /><FilmList /></> } />
      <Route path="/film/:id" element={ <FilmDetail /> } />
    </Routes>

  );
};

export default App;

