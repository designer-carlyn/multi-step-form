import React, { useState } from "react";

const AddOns = () => {
  const [addOns, setAddOns] = useState([]);

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    let isChecked = event.target.checked;
    var updateAddOns = [...addOns];

    if (isChecked) {
      updateAddOns = [
        ...addOns,
        {
          name: name,
        },
      ];
    } else {
      updateAddOns.splice(addOns.indexOf(name), 1);
    }

    setAddOns(updateAddOns);
  }

  return (
    <div className="add-ons card">
      <div className="card-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="card-content">
        <div className="add-ons__wrapper">
          <div className="add-ons__wrapper-item">
            <input
              type="checkbox"
              value="1"
              name="Online Service"
              onChange={handleChange}
            />
            <div className="checkbox-content">
              <div className="item-checkbox"></div>
              <div className="item-context">
                <p>Online Service</p>
                <p>Access to multiplayer games</p>
              </div>
              <div className="item-price">+$1/mo</div>
            </div>
          </div>
        </div>
        <div className="add-ons__wrapper">
          <div className="add-ons__wrapper-item">
            <input
              type="checkbox"
              value="2"
              name="Larger Storage"
              onChange={handleChange}
            />
            <div className="checkbox-content">
              <div className="item-checkbox"></div>
              <div className="item-context">
                <p>Larger Storage</p>
                <p>Extra 1TB of cloud save</p>
              </div>
              <div className="item-price">+$2/mo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <button className="btn btn-back">Go Back</button>
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
};

export default AddOns;
