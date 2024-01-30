import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import Login from "../src/components/user/Loginform.jsx"
import Signup from "../src/components/user/PersonalDetails/PersonalDetails.jsx";
import Sidenavbar from "../src/components/user/Sidenavbar.jsx";
import Header from "../src/components/user/Header/Header.jsx";
import Incomedetails from "../src/components/user/Incomedetails/Incomedetails.jsx";
import FileUpload from "../src/components/user/FileUpload/FileUpload.jsx";
import TaxView from "../src/components/user/TaxView/TaxView.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "../src/components/user/Profile/Profile.jsx";
import RegisterPersonalDetails from "../src/pages/RegisterPersonalDetails.jsx"
import SignupPersonalDetails from "../src/components/user/PersonalDetails/PersonalDetails.jsx"
import { BrowserRouter, Routes,Route } from "react-router-dom";




function App() {
  
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignupPersonalDetails/>}></Route>
    <Route path="/personaldetails" element={<RegisterPersonalDetails/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/incomedetails" element={<Incomedetails/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/viewtax" element={<TaxView/>}></Route>
    <Route path="/upload" element={<FileUpload/>}></Route>
    
  </Routes>
  </BrowserRouter>    

  );
}

export default App;
