

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./EmployeePage.css"; 

function EmployeePage() {
  const [formData, setFormData] = useState({
    userName: "",
    message: "",
    status: "",
  });

  //   const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <div className="employee-form-container">
      <h2 className="form-heading mt-5">Consultation Information</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
          className=" form-control"
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Report</label>
          <textarea
          className=" form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={15}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="d-flex justify-content-center align-content-center mt-5">
          <button type="submit" className="submit-button ">
            Add a Consultation
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeePage;
