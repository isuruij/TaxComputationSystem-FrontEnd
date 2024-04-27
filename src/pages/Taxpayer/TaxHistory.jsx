import React from "react";
import TaxPaymentHistory from "../../components/user/TaxHistory/TaxPaymentHistory";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import Header from "../../components/user/Header/Header";


function TaxHistory() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{marginTop:"5px"}}>
          <Sidenavbar />
        </div>
        <div style={{width:'77vw',marginLeft:"5px",marginTop:"0px"}} >
          <TaxPaymentHistory/>
        </div>
      </div>
    </div>
  );
}

export default TaxHistory;