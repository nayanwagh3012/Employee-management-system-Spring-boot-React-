import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function AdminLoginComp(props) {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Password should be at least 6 characters long
  };

  const loggedInAdmin = () => {
    const enteredUsername = adminUsername.trim();
    const enteredPassword = adminPassword.trim();

    // Validate email
    if (!validateEmail(enteredUsername)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");// Clear password error message
    }

    // Validate password
    if (!validatePassword(enteredPassword)) {
      setPasswordError("Password must be at least 6 characters long"); // Set password error message
      return;
    } else {
      setPasswordError(""); 
    }

    // Send request to backend server
    if (
      enteredUsername === "admin@gmail.com" &&
      enteredPassword === "Admin@123"
    ) {
      props.props.setIsAdminLoggedIn(true);
      alert("Login successful!!");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return ( 
    <div className="login-page">
    <img className="background-image" src="bgimg3.jpg" alt="mountains" />
    <div className="login-form">
      <h1>Login</h1><br/>
       <div className="input-container">  
          <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={adminUsername}
              onChange={(e) => {
                setAdminUsername(e.target.value);
                setEmailError("");
              }}
            />
            <FaUser className="icon"/>
           
            {emailError && (
              <div className="text-danger">{emailError}</div>
            )}
          
        </div><br/>
        <div className="input-container">
        
          <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => {setAdminPassword(e.target.value);
              setPasswordError("")}}
            />
            <FaLock  className="icon"/>
            
            {passwordError && (
              <div className="text-danger">{passwordError}</div> // Display password error message
            )}
        </div>
        <div><br/>
        <div className="checkbox-container">
          <label><input type="checkbox"/>Remember me</label>
          <a href="#">Forgot password?</a> 
        </div>
       </div>
        
          <button className="login-button"
          onClick={loggedInAdmin}>Login</button><br></br>
       
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
           
        </div>
        
      </div>
  </div>
    
    

  
  );
}

export default AdminLoginComp;

