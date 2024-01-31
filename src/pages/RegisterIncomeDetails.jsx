import React from 'react'
import Header from "../components/user/Header/Header";
import Sidenavbar from "../components/user/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Incomedetails from '../components/user/Incomedetails/Incomedetails';

function RegisterIncomeDetails() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{marginTop:"5px"}}>
          <Sidenavbar />
        </div>
        <div style={{marginLeft:"5px",marginTop:"5px"}} >
          <Incomedetails />
        </div>
      </div>
    </div>
  )
}

export default RegisterIncomeDetails