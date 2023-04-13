import React, { useState, useContext } from "react";
import { StepContext } from "@/context/data";

const StepForm = () => {
  const [step, setStep] = useContext(StepContext);

  return (
    <div className="step-wrapper">
      <div className="step-info">
        <div className={`info-number ${step === 1 ? "active" : ""}`}>1</div>
        <div className="info-context">
          <div className="context-step">Step 1</div>
          <div className="context-title">Your Info</div>
        </div>
      </div>
      <div className="step-info">
        <div className={`info-number ${step === 2 ? "active" : ""}`}>2</div>
        <div className="info-context">
          <div className="context-step">Step 2</div>
          <div className="context-title">Select Plan</div>
        </div>
      </div>
      <div className="step-info">
        <div className={`info-number ${step === 3 ? "active" : ""}`}>3</div>
        <div className="info-context">
          <div className="context-step">Step 3</div>
          <div className="context-title">Add-ons</div>
        </div>
      </div>
      <div className="step-info">
        <div
          className={`info-number ${step === 4 || step === 0 ? "active" : ""}`}
        >
          4
        </div>
        <div className="info-context">
          <div className="context-step">Step 4</div>
          <div className="context-title">Summary</div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
