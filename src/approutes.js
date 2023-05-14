import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Game from "./components/browsergame";
import MainLayout from "./hoc/mainLayout";
import Resume from "./components/resume";
import Competencies from "./components/competencies";
import WasteCalc from "./components/wastecalc";
import Contact from "./components/contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Contact />
      <Header />
      <MainLayout bg='dark'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/components/browsergame' element={<Game />} />
          <Route path='/components/wastecalc' elecment={<WasteCalc />} />
        </Routes>
      </MainLayout>
      <Resume />
      <Competencies />
    </BrowserRouter>
  );
}

export default AppRoutes;
