import React from 'react'
import Header from "../components/user/Header/Header";
import Sidenavbar from "../components/user/Sidenavbar/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import FileUpload from '../components/user/FileUpload/FileUpload';

function RegisterUploadDocuments() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{marginTop:"5px",}}>
          <Sidenavbar />
        </div>
        <div style={{marginLeft:"5px",marginTop:"5px", width:"65vw"}} >
          <FileUpload />
        </div>
      </div>
    </div>
  )
}

export default RegisterUploadDocuments