import React, { useContext, useEffect } from "react";
import { OptionBillingContext, PickAddOns, StepContext } from "@/context/data";

const AddOns = () => {
  const [selectedPlan, setSelectedPlan] = useContext(OptionBillingContext);
  const [pickAddOns, setPickAddOns] = useContext(PickAddOns);
  const [step, setStep] = useContext(StepContext);

  function handleChange(index) {
    setPickAddOns(
      pickAddOns.map((item, currentIndex) =>
        currentIndex === index
          ? {
              ...item,
              isChecked: !item.isChecked,
            }
          : item
      )
    );
  }

  const goBack = () => {
    setStep(2);
  };

  return (
    <div className="add-ons card">
      <div className="card-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="card-content">
        <div className="add-ons__wrapper">
          {pickAddOns.map((item, index) => {
            return (
              <div className="add-ons__wrapper-item" key={index}>
                <input
                  type="checkbox"
                  value="1"
                  id="online-service"
                  name="Online Service"
                  checked={item.isChecked}
                  onChange={() => handleChange(index)}
                />
                <div className="checkbox-content">
                  <div className="item-checkbox"></div>
                  <div className="item-context">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-price">
                    +${item.value}/{!selectedPlan ? "mo" : "yr"}
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="add-ons__wrapper-item">
            <input
              type="checkbox"
              value="1"
              id="online-service"
              name="Online Service"
            />
            <div className="checkbox-content">
              <div className="item-checkbox"></div>
              <div className="item-context">
                <p>Online Service</p>
                <p>Access to multiplayer games</p>
              </div>
              <div className="item-price">+$1/mo</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="card-bottom">
        <button className="btn btn-back" onClick={goBack}>
          Go Back
        </button>
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
};

export default AddOns;
