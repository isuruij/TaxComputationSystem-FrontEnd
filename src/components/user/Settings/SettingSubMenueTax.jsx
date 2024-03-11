import React from "react";
import "./SettingSubMenue.css"
import { useNavigate } from "react-router-dom";

function SettingSubMenueTax() {
  const navigate = useNavigate();
  return (
    
      <div className="group">
        <button
          class="btn btn-primary bt"
          style={{ }}
          onClick={()=>{
            navigate("/TaxStatus")
          }}
        >
          Tax Status
        </button>
        <button
          class="btn btn-primary bt"
          style={{  }}
          onClick={()=>{
            navigate("/settings/income")
          }}
        >
          Tax history
        </button>
        <button
          class="btn btn-primary bt"
          style={{  }}
          onClick={()=>{
            navigate("/TaxPayments")
          }}
        >
          Tax Payments Update
        </button>
      </div>

        

    
  );
}

export default SettingSubMenueTax;
