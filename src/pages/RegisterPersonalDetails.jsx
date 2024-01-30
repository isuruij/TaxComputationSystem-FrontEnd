import React, { useEffect } from 'react'
import Header from '../components/user/Header/Header'
import Sidenavbar from "../components/user/Sidenavbar"
import { useState } from "react";
import Axios from "axios";
import PersonalDetails from '../components/user/PersonalDetails/PersonalDetails';

function RegisterPersonalDetails() {
  return (
    <div>
        <Header/>
        <Sidenavbar/>
        <PersonalDetails/>
        
        
    </div>
  )
}

export default RegisterPersonalDetails