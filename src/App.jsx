
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUpload from "../src/components/user/FileUpload/FileUpload.jsx";
import Incomedetails from "../src/components/user/Incomedetails/Incomedetails.jsx";
import Login from "../src/components/user/Loginform.jsx";
import SignupPersonalDetails from "../src/components/user/PersonalDetails/PersonalDetails.jsx";
import TaxView from "../src/components/user/TaxView/TaxView.jsx";
import RegisterPersonalDetails from "../src/pages/RegisterPersonalDetails.jsx";
import "./App.css";
import "./index.scss";
import Dashboard from "./pages/Dashboard.jsx";
import UserHome from "./pages/UserHome.jsx";



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
    <Route path="/UserHome" element={<UserHome/>}></Route>
    
  </Routes>
  </BrowserRouter>    

  );
}

export default App;
