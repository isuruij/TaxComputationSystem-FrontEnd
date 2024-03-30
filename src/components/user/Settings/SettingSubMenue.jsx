import React from "react";
import "./SettingSubMenue.css"
import { useNavigate } from "react-router-dom";

function SettingSubMenue() {
  const navigate = useNavigate();
  return (
    
      <div className="group">
        <button
          className="btn btn-primary bt"
          style={{ }}
          onClick={()=>{
            navigate("/settings/basic")
          }}
        >
          <div className="setting-option">Basic Details</div>
        </button>
        <button
          className="btn btn-primary bt"
          style={{  }}
          onClick={()=>{
            navigate("/settings/income")
          }}
        >
          <div className="setting-option">Income Details</div>
        </button>
        <button
          className="btn btn-primary bt"
          style={{  }}
          onClick={()=>{
            navigate("/settings/uploadfiles")
          }}
        >
          <div className="setting-option">Update Files</div>
        </button>
      </div>

        

    
  );
}

export default SettingSubMenue;
