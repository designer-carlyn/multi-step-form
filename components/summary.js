import React, { useContext, useEffect, useState } from "react";
import {
  SelectPlanContext,
  OptionBillingContext,
  PickAddOns,
  StepContext,
} from "@/context/data";

const Summary = () => {
  const [selectedPlan, setSelectedPlan] = useContext(SelectPlanContext);
  const [optionBilling, setOptionBilling] = useContext(OptionBillingContext);
  const [pickAddOns, setPickAddOns] = useContext(PickAddOns);
  const [step, setStep] = useContext(StepContext);
  const [filteredAddOns, setFilteredAddOns] = useState([]);
  const [totalBill, setTotalBill] = useState("");

  useEffect(() => {
    const filteringAddons = pickAddOns.filter(
      (item) => item.isChecked !== false
    );
    setFilteredAddOns(filteringAddons);

    const addOnsValue = filteringAddons.map((item) => item.value);

    let sumAddOnsValue = 0;
    addOnsValue.forEach((item) => {
      sumAddOnsValue += item;
    });
    setTotalBill(selectedPlan.planPrice + sumAddOnsValue);

    return () => {
      setFilteredAddOns([]);
    };
  }, []);

  const goBack = () => {
    setStep(3);
  };

  const changePlan = () => {
    setStep(2);
  };

  return (
    <div className="summary card">
      <div className="card-header">
        <h1>Summary</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="card-content">
        <div className="summary__wrapper">
          <div className="summary__wrapper-plan">
            <div className="plan-title">
              <h3>
                {selectedPlan.planName} ({!optionBilling ? "Monthly" : "Yearly"}
                )
              </h3>
              <button onClick={changePlan}>Change</button>
            </div>
            <div className="plan-price">
              <h3>
                ${selectedPlan.planPrice}/{!optionBilling ? "mo" : "yr"}
              </h3>
            </div>
          </div>
          <div className="summary__wrapper-addons">
            {filteredAddOns.length !== 0 ? (
              filteredAddOns.map((item, index) => {
                return (
                  <div className="addons-item" key={index}>
                    <h4>{item.name}</h4>
                    <h4>
                      +${item.value}/{!optionBilling ? "mo" : "yr"}
                    </h4>
                  </div>
                );
              })
            ) : (
              <div className="addons-empty">No Add-ons selected</div>
            )}
          </div>
        </div>
        <div className="summary__total">
          <h4>Total (per {!optionBilling ? "month" : "year"})</h4>
          <h2>
            +${totalBill}/{!optionBilling ? "mo" : "yr"}
          </h2>
        </div>
      </div>
      <div className="card-bottom">
        <button className="btn btn-back" onClick={goBack}>
          Go Back
        </button>
        <button className="btn btn-confirm">Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
