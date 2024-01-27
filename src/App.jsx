import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import Loginform from "./components/Loginform.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Sidenavbar from "./components/Sidenavbar.jsx";
import Header from "./components/Header.jsx";
import Incomedetails from "./components/Incomedetails.jsx";
import FileUpload from "./components/FileUpload.jsx";
import TaxView from "./components/TaxView.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter, Routes,Route } from "react-router-dom";



function App() {
  
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<PersonalDetails/>}></Route>
    <Route path="/login" element={<Loginform/>}></Route>
    <Route path="/signup" element={<PersonalDetails/>}></Route>
    <Route path="/de" element={<PersonalDetails/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    
  </Routes>
  </BrowserRouter>    

  );
}

export default App;
