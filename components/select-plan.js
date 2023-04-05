import React, { useContext, useState } from "react";
import { StepContext } from "@/context/data";

import Image from "next/image";

const SelectPlan = () => {
  const [price, setPrice] = useState(9);

  function handleOnChange(event) {
    let value = event.target.value;
    setPrice(value);
    console.log(value);
  }

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
              value={9}
              checked={price == "9"}
              onChange={handleOnChange}
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
                <div className="context-price">$9/mo</div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="radio-plan"
              value={12}
              checked={price == "12"}
              onChange={handleOnChange}
            />
            <div className="select-plan__form-item">
              <div className="item-icon">
                <Image
                  src="/static/images/icon-advanced.svg"
                  alt="Icon Arcade"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="item-context">
                <div className="context-title">Advanced</div>
                <div className="context-price">$12/mo</div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="radio"
              name="radio-plan"
              value={15}
              checked={price == "15"}
              onChange={handleOnChange}
            />
            <div className="select-plan__form-item">
              <div className="item-icon">
                <Image
                  src="/static/images/icon-pro.svg"
                  alt="Icon Arcade"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="item-context">
                <div className="context-title">Pro</div>
                <div className="context-price">$15/mo</div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="card-bottom">
        <button className="btn btn-back">Go Back</button>
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
};

export default SelectPlan;
