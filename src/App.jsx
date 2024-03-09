
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "./index.scss";
import Login from "./pages/LoginPage.jsx";
import Signup from "./pages/Signup.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPersonalDetails from "../src/pages/RegisterPersonalDetails.jsx";
import Test from "./components/user/Settings/Test.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RegisterIncomeDetails from "./pages/RegisterIncomeDetails.jsx";
import RegisterUploadDocuments from "./pages/RegisterUploadDocuments.jsx";
import SettingsBasicDetails from "./pages/SettingsBasicDetails.jsx";
import SettingsFileUpload from "./pages/SettingsFileUpload.jsx";
import SettingsIncomeDetails from "./pages/SettingsIncomeDetails.jsx";
import TaxStatus from "./pages/TaxStatus.jsx";

import SuperAdminDashboard from "./pages/SuperAdminDashboard.jsx";
import UserHome from "./pages/UserHome.jsx";
import Viewtax from "./pages/Viewtax.jsx";







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
    <Route path="/UserHomePage" element={<UserHome/>}></Route>
    <Route path="/TaxStatus" element={<TaxStatus/>}></Route>
    <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard/>}></Route>
    
    <Route path="/" element={<Test/>}></Route>
    
    
  </Routes>
  </BrowserRouter>    

  );
}

export default App;
