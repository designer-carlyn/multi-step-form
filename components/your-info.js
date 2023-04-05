import React from "react";

const YourInfo = () => {
  return (
    <div className="your-info card">
      <div className="card-header">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="card-content">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="full_name" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone_number"
              placeholder="e.g. 0912 345 6789"
            />
          </div>
        </form>
      </div>
      <div className="card-bottom">
        <button className="btn btn-next">Next Step</button>
      </div>
    </div>
  );
};

export default YourInfo;
