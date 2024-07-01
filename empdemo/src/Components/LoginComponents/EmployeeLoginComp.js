// EmployeeLogin.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const EmployeeLoginComp = (props) => {
  const [employeeId, setEmployeeId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!username || !password) {
      setError("All fields are required");
      return;
    }
    // Send data to API
    axios
      .post("http://localhost:8080/api/v1/login-credentials/authenticate", {
        username: username,
        password: password,
      })
      .then((response) => {
        // Handle successful login
        console.log(response.data);
        let id = response.data;
        console.log("Login successful:", response.data);
        setError("");
        alert("Login successful!");
        props.props.setViewEmployeeId(id.loginCredentialsId);
        props.props.setIsUserLoggedIn(true);
        navigate(`/view-employee/${id.loginCredentialsId}`);
        // navigate('/view-employee/')
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error);
        setError("Login failed. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="login-page">
      <img className="background-image" src="bgimg.avif" />

      <div className="login-form">
        <div className="row justify-content-center ">
          {/* <div className="container mt-5" > */}
          {/* <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body"> */}
          <h2 className="text-center mb-4">Employee Login</h2>
          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-3    ">
              <label htmlFor="employeeId" className="form-label">
                Employee ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block ">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    //  {/* </div> */}
    // </div>
  );
};

export default EmployeeLoginComp;
