import React, { useContext } from "react";
import { StepContext } from "@/context/data";

const SelectPlan = () => {
  const [step, setStep] = useContext(StepContext);

  const onClickBack = () => {
    setStep(1);
  };

  return (
    <div className="select-plan card">
      <div className="card-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="card-content"></div>
      <div className="card-bottom">
        <button className="btn btn-back" onClick={onClickBack}>
          Go Back
        </button>
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
};

export default SelectPlan;
