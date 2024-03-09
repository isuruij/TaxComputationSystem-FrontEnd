import React from 'react';
import Header from '../components/user/Header/Header';
import SettingSubMenueTax from '../components/user/Settings/SettingSubMenueTax';
import TaxStatusBody from '../components/user/TaxStatus/TaxStatusBody';

import Sidenavbar from '../components/user/Sidenavbar';

export default function TaxStatus() {
  return (
    <div>
    <Header />
    <div style={{ display: "flex" }}>
      <div style={{marginTop:"5px"}}>
        <Sidenavbar />
      </div>
      <div style={{width:'65vw',marginLeft:"5px",marginTop:"5px",display:"block"}} >
        <div><SettingSubMenueTax/></div>
        <div><TaxStatusBody/></div>
      </div>
    </div>
  </div>
    
  )
}
