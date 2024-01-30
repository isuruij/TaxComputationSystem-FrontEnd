import React, { useEffect } from 'react'
import Header from '../components/user/Header/Header'
import Sidenavbar from "../components/user/Sidenavbar"
import { useState } from "react";
import Axios from "axios";



function Dashboard() {
  const [auth, setauth] = useState(false);
  const [name, setname] = useState("");
  Axios.defaults.withCredentials = true;
  let res;
  const handle = async ()=>{    
    let res = await Axios.get("http://localhost:3000/api/taxpayer/auth");
    // console.log("testingggggggg")
    // console.log("test")
    console.log(res)
    if(res.data.Status === "Success"){
      setauth(true)
      setname(res.data.Data)
    }else{
      alert(`${res.data.Status}`+" Enter details correctly")
    }
    console.log(res)
  }

  useEffect(() => {
    try {
      
      handle();

    } catch (error) {
      console.log(error);
    }

  }, [])

  return (
    <div>{ auth ?
        <>
        <Header name={name}/>
        <Sidenavbar/>
        </>
        :<h1>please authenticate</h1>
    }
    </div>

  )
}

export default Dashboard