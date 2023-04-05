import React from "react";

const SelectPlan = () => {
  return (
    <div className="select-plan card">
      <div className="card-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="card-content"></div>
      <div className="card-bottom">
        <button className="btn btn-back">Go Back</button>
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
};

export default SelectPlan;
