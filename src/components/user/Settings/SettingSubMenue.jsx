import React from "react";
import "./SettingSubMenue.css"
import { useNavigate } from "react-router-dom";

function SettingSubMenue() {
  const navigate = useNavigate();
  return (
    
      <div className="group">
        <button
          class="btn btn-primary bt"
          style={{ }}
          onClick={()=>{
            navigate("/settings/basic")
          }}
        >
          Basic Details
        </button>
        <button
          class="btn btn-primary bt"
          style={{  }}
          onClick={()=>{
            navigate("/settings/income")
          }}
        >
          Income Details
        </button>
        <button
          class="btn btn-primary bt"
          style={{  }}
          onClick={()=>{
            navigate("/settings/uploadfiles")
          }}
        >
          Update Files
        </button>
      </div>

        

    
  );
}

export default SettingSubMenue;
