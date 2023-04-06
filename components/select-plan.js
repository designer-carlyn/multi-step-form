import React, { useContext, useEffect, useState } from "react";
import {
  OptionBillingContext,
  SelectPlanContext,
  StepContext,
} from "@/context/data";

import Image from "next/image";

const SelectPlan = () => {
  const [toggleBilling, setToggleBilling] = useContext(OptionBillingContext);
  const [choosePlan, setChoosePlan] = useContext(SelectPlanContext);
  const [step, setStep] = useContext(StepContext);

  const handleOnChangePlan = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    setChoosePlan({
      planName: id,
      planPrice: parseInt(value),
    });
  };

  const handleOnChangeBilling = () => {
    setToggleBilling((toggleBilling) => !toggleBilling);
    if (!toggleBilling) {
      setChoosePlan({
        planName: choosePlan.planName,
        planPrice: choosePlan.planPrice * 10,
      });
    } else {
      setChoosePlan({
        planName: choosePlan.planName,
        planPrice: choosePlan.planPrice / 10,
      });
    }
  };

  const nextStep = () => {
    setStep(3);
  };

  const goBack = () => {
    setStep(1);
  };

  return (
    <div className="select-plan card">
      <div className="card-header">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="card-content">
        <form className="select-plan__form">
          <div className="form-group">
            <input
              type="radio"
              name="radio-plan"
              id="Arcade"
              value={!toggleBilling ? 9 : 90}
              checked={
                choosePlan.planPrice === 9 || choosePlan.planPrice === 90
              }
              onChange={handleOnChangePlan}
            />
            <div className="select-plan__form-item">
              <div className="item-icon">
                <Image
                  src="/static/images/icon-arcade.svg"
                  alt="Icon Arcade"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="item-context">
                <div className="context-title">Arcade</div>
                <div className="context-price">
                  {!toggleBilling ? "$9/mo" : "$90/yr"}
                </div>
                {toggleBilling ? (
                  <div className="context-free">2 months free</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="radio-plan"
              id="Advanced"
              value={!toggleBilling ? 12 : 120}
              checked={
                choosePlan.planPrice === 12 || choosePlan.planPrice === 120
              }
              onChange={handleOnChangePlan}
            />
            <div className="select-plan__form-item">
              <div className="item-icon">
                <Image
                  src="/static/images/icon-advanced.svg"
                  alt="Icon Advanced"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="item-context">
                <div className="context-title">Advanced</div>
                <div className="context-price">
                  {!toggleBilling ? "$12/mo" : "$120/yr"}
                </div>
                {toggleBilling ? (
                  <div className="context-free">2 months free</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="radio-plan"
              id="Pro"
              value={!toggleBilling ? 15 : 150}
              checked={
                choosePlan.planPrice === 15 || choosePlan.planPrice === 150
              }
              onChange={handleOnChangePlan}
            />
            <div className="select-plan__form-item">
              <div className="item-icon">
                <Image
                  src="/static/images/icon-pro.svg"
                  alt="Icon Pro"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="item-context">
                <div className="context-title">Pro</div>
                <div className="context-price">
                  {!toggleBilling ? "$15/mo" : "$150/yr"}
                </div>
                {toggleBilling ? (
                  <div className="context-free">2 months free</div>
                ) : null}
              </div>
            </div>
          </div>
        </form>
        <div className="select-plan__toggle">
          <div className="toggle-form">
            <span className={`toggle-label ${!toggleBilling ? "active" : ""}`}>
              Monthly
            </span>
            <input
              className="toggle-checkbox"
              type="checkbox"
              checked={toggleBilling}
              onChange={handleOnChangeBilling}
            />
            <div className="toggle-switch"></div>
            <span className={`toggle-label ${toggleBilling ? "active" : ""}`}>
              Yearly
            </span>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <button className="btn btn-back" onClick={goBack}>
          Go Back
        </button>
        <button className="btn btn-next" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
