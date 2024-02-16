import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import Login from "./pages/LoginPage.jsx"
import Signup from "./pages/Signup.jsx";
import Sidenavbar from "../src/components/user/Sidenavbar.jsx";
import Header from "../src/components/user/Header/Header.jsx";
import Incomedetails from "../src/components/user/Incomedetails/Incomedetails.jsx";
import FileUpload from "../src/components/user/FileUpload/FileUpload.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Profile from "../src/components/user/Profile/Profile.jsx";
import RegisterPersonalDetails from "../src/pages/RegisterPersonalDetails.jsx"
import SignupPersonalDetails from "../src/components/user/PersonalDetails/PersonalDetails.jsx"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import RegisterIncomeDetails from "./pages/RegisterIncomeDetails.jsx";
import RegisterUploadDocuments from "./pages/RegisterUploadDocuments.jsx";
import SettingsBasicDetails from "./pages/SettingsBasicDetails.jsx";
import SettingsIncomeDetails from "./pages/SettingsIncomeDetails.jsx";
import Viewtax from "./pages/Viewtax.jsx";
import SettingsFileUpload from "./pages/SettingsFileUpload.jsx";

import NotificationCentre from "./pages/NotificationCentre.jsx";






function App() {
  
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/settings/uploadfiles" element={<SettingsFileUpload/>}></Route>
    <Route path="/settings/income" element={<SettingsIncomeDetails/>}></Route>
    <Route path="/settings/basic" element={<SettingsBasicDetails/>}></Route>
    <Route path="/register/uploadfiles" element={<RegisterUploadDocuments/>}></Route>
    <Route path="/register/incomedetails" element={<RegisterIncomeDetails/>}></Route>
    <Route path="/register/personaldetails" element={<RegisterPersonalDetails/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/viewtax" element={<Viewtax/>}></Route>
    
    <Route path="/notification" element={<NotificationCentre/>}></Route>
    
   
    
    
  </Routes>
  </BrowserRouter>    

  );
}

export default App;
