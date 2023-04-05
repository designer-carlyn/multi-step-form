import React, { useState } from "react";

const StepForm = () => {
  const [step, showStep] = useState(1);

  return (
    <div className="step-wrapper">
      <div className="step-info">
        <div className="info-number">1</div>
        <div className="info-context">
          <div className="context-step">Step 1</div>
          <div className="context-title">Your Info</div>
        </div>
      </div>
      <div className="step-info">
        <div className="info-number">2</div>
        <div className="info-context">
          <div className="context-step">Step 2</div>
          <div className="context-title">Select Plan</div>
        </div>
      </div>
      <div className="step-info">
        <div className="info-number">3</div>
        <div className="info-context">
          <div className="context-step">Step 3</div>
          <div className="context-title">Add-ons</div>
        </div>
      </div>
      <div className="step-info">
        <div className="info-number">4</div>
        <div className="info-context">
          <div className="context-step">Step 4</div>
          <div className="context-title">Summary</div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
