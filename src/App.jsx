import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "./index.scss";
import Login from "./pages/Taxpayer/LoginPage.jsx";

import Signup from "./pages/Taxpayer/Signup.jsx";
import Sidenavbar from "../src/components/user/Sidenavbar/Sidenavbar.jsx";
import Header from "../src/components/user/Header/Header.jsx";
import Incomedetails from "../src/components/user/Incomedetails/Incomedetails.jsx";
import FileUpload from "../src/components/user/FileUpload/FileUpload.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPersonalDetails from "../src/pages/Taxpayer/RegisterPersonalDetails.jsx";
import Dashboard from "./pages/Taxpayer/Dashboard.jsx";
import RegisterIncomeDetails from "./pages/Taxpayer/RegisterIncomeDetails.jsx";
import RegisterUploadDocuments from "./pages/Taxpayer/RegisterUploadDocuments.jsx";
import SettingsBasicDetails from "./pages/Taxpayer/SettingsBasicDetails.jsx";
import SettingsFileUpload from "./pages/Taxpayer/SettingsFileUpload.jsx";
import SettingsIncomeDetails from "./pages/Taxpayer/SettingsIncomeDetails.jsx";
import TaxStatus from "./pages/Taxpayer/TaxStatus.jsx";
import VerifyUserEmail from "./pages/Taxpayer/VerifyUserEmail.jsx";

import UserHome from "./pages/Taxpayer/UserHome.jsx";
import Viewtax from "./pages/Taxpayer/Viewtax.jsx";
import TaxPayments from "./pages/Taxpayer/TaxPayments.jsx";
import ForgetPasswordPage from "./pages/Taxpayer/ForgetPasswordPage.jsx";
import ResetPasswordPage from "./pages/Taxpayer/ResetPasswordPage.jsx";

import DDashboard from "./pages/DataEntry/DDashboard.jsx";
import DViewTaxPage from "./pages/DataEntry/DViewTaxPage.jsx";
import DFileUploadPage from "./pages/DataEntry/DFileUploadPage.jsx";
import DSubmissionDashboard from "./pages/DataEntry/DSubmissionDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*User routes*/}
        <Route
          path="/settings/uploadfiles"
          element={<SettingsFileUpload />}
        ></Route>
        <Route
          path="/settings/income"
          element={<SettingsIncomeDetails />}
        ></Route>
        <Route
          path="/settings/basic"
          element={<SettingsBasicDetails />}
        ></Route>
        <Route
          path="/register/uploadfiles"
          element={<RegisterUploadDocuments />}
        ></Route>
        <Route
          path="/register/incomedetails"
          element={<RegisterIncomeDetails />}
        ></Route>
        <Route
          path="/register/personaldetails"
          element={<RegisterPersonalDetails />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/viewtax" element={<Viewtax />}></Route>
        <Route path="/UserHomePage" element={<UserHome />}></Route>
        <Route path="/TaxStatus" element={<TaxStatus />}></Route>
        <Route path="/TaxPayments" element={<TaxPayments />}></Route>
        <Route path="/verify-email" element={<VerifyUserEmail />}></Route>
        <Route path="/forgotpassword" element={<ForgetPasswordPage />}></Route>
        <Route path="/resetpassword" element={<ResetPasswordPage />}></Route>

        {/*Data Entry routes*/}
        <Route path="/dataEntry/dashboard" element={<DDashboard />}></Route>
        <Route path="/dataEntry/viewTax" element={<DViewTaxPage />}></Route>
        <Route
          path="/dataEntry/submission/uploadDoc"
          element={<DFileUploadPage />}
        ></Route>
        <Route
          path="/dataEntry/submission/dashboard"
          element={<DSubmissionDashboard />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
