import React from 'react';
import Header from '../../components/user/Header/Header';
import SettingSubMenueTax from '../../components/user/Settings/SettingSubMenueTax';

import TaxPayment from '../../components/user/TaxPayments/TaxPayment';

import Sidenavbar from '../../components/user/Sidenavbar/Sidenavbar';

export default function TaxPayments() {
  return (
    <div>
    <Header />
    <div style={{ display: "flex" }}>
      <div style={{marginTop:"5px"}}>
        <Sidenavbar />
      </div>
      <div style={{width:'65vw',marginLeft:"5px",marginTop:"5px",display:"block"}} >
        <div><SettingSubMenueTax/></div>
        <div><TaxPayment/></div>
      </div>
    </div>
  </div>
    
  )
}
