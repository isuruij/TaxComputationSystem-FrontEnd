import React from "react";
import "./SettingSubMenue.css";
import { useNavigate } from "react-router-dom";

function SettingSubMenueTax() {
  const navigate = useNavigate();
  return (
    <div className="group">
      <button
        className="btn btn-primary bt"
        style={{}}
        onClick={() => {
          navigate("/TaxStatus");
        }}
      >
        <div className="setting-option">Tax Status</div>
      </button>
      <button
        className="btn btn-primary bt"
        style={{}}
        onClick={() => {
          navigate("/taxhistory");
        }}
      >
        <div className="setting-option">Tax History</div>
      </button>
      <button
        className="btn btn-primary bt"
        style={{}}
        onClick={() => {
          navigate("/TaxPayments");
        }}
      >
        <div className="setting-option">Payment Update</div>
      </button>
    </div>
  );
}

export default SettingSubMenueTax;
