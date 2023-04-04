import React, { useState } from "react";

export default function Home() {
  const [step, showStep] = useState("step-1");

  function handleOnChange(event) {
    let value = event.target.value;
    showStep(value);
    console.log(value);
  }

  return (
    <main className="multi-step">
      <div className="multi-step__form">
        <div className="step-wrapper">
          <form className="radio-form">
            <div className="input-group">
              <input
                type="radio"
                id="step-1"
                name="radio-step"
                value="step-1"
                checked={step === "step-1"}
                onChange={handleOnChange}
              />
              <div className="step-info">
                <div className="info-number">1</div>
                <div className="info-context">
                  <div className="context-step">Step 1</div>
                  <div className="context-title">Your Info</div>
                </div>
              </div>
            </div>
            <div className="input-group">
              <input
                type="radio"
                id="step-2"
                name="radio-step"
                value="step-2"
                checked={step === "step-2"}
                onChange={handleOnChange}
              />
              <div className="step-info">
                <div className="info-number">2</div>
                <div className="info-context">
                  <div className="context-step">Step 2</div>
                  <div className="context-title">Select Plan</div>
                </div>
              </div>
            </div>
            <div className="input-group">
              <input
                type="radio"
                id="step-3"
                name="radio-step"
                value="step-3"
                checked={step === "step-3"}
                onChange={handleOnChange}
              />
              <div className="step-info">
                <div className="info-number">3</div>
                <div className="info-context">
                  <div className="context-step">Step 3</div>
                  <div className="context-title">Add-ons</div>
                </div>
              </div>
            </div>
            <div className="input-group">
              <input
                type="radio"
                id="step-4"
                name="radio-step"
                value="step-4"
                checked={step === "step-4"}
                onChange={handleOnChange}
              />
              <div className="step-info">
                <div className="info-number">4</div>
                <div className="info-context">
                  <div className="context-step">Step 4</div>
                  <div className="context-title">Summary</div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="info-container"></div>
      </div>
    </main>
  );
}
