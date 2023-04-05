import React, { useState } from "react";
import { useForm } from "react-hook-form";

const YourInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [personalInfo, setPersonalInfo] = useState({});

  const onSubmit = (data) => {
    setPersonalInfo(data);
  };

  return (
    <div className="your-info card">
      <div className="card-header">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-content">
          <div className="form-group">
            <label>Full Name</label>
            <small role="alert">{errors.full_name?.message}</small>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              autoComplete="off"
              {...register("full_name", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z '.-]*$/,
                  message: "Please enter valid name",
                },
              })}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <small role="alert">{errors.email_address?.message}</small>
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              autoComplete="off"
              {...register("email_address", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <small role="alert">{errors.phone_number?.message}</small>
            <input
              type="number"
              name="phone_number"
              placeholder="e.g. 0912 345 6789"
              autoComplete="off"
              {...register("phone_number", {
                required: "This field is required",
                minLength: {
                  value: 11,
                  message: "Phone number must be 11 digits.",
                },
              })}
            />
          </div>
        </div>
        <div className="card-bottom">
          <button className="btn btn-next" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
