import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarComp(props) {
  let navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light text-blue mb-5"
        style={{ backgroundColor: "#9999e6" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <div className="d-flex align-items-center">
              <img
                src="logo.png"
                alt="Logo"
                style={{ marginRight: "10px", height: "40px" }}
              />
              <h4>Employee Management System</h4>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <b style={{ fontSize: "17px" }}> Home </b>
                </Link>
              </li>
              {props.props.iaAdminLoggedIn ? null : (
                <li className="nav-item">
                  <Link to="admin-login" className="nav-link ">
                    <b
                      style={{
                        fontSize: "17px",
                        marginLeft: "-30px",
                        color: "black",
                      }}>
                      Admin Login
                    </b>
                  </Link>
                </li>
              )}
              {props.props.iaAdminLoggedIn ? null : (
                <li className="nav-item">
                  <Link to={"employee-login"} className="nav-link">
                    <b
                      style={{
                        fontSize: "17px",
                        marginLeft: "-30px",
                        color: "black",
                      }}>
                      {" "}
                      Employee Login
                    </b>
                  </Link>
                </li>
              )}
              {props.props.iaAdminLoggedIn ? (
                <li className="nav-item">
                  <button
                    className="btnlogin"
                    onClick={() => {
                      props.props.setIsAdminLoggedIn(false);
                      navigate("/");
                    }}>
                    <b> Logout</b>
                  </button>
                </li>
              ) : null}
            </ul>
          </div> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* <!-- Adding ms-auto className to move the content to the right --> */}
              <li
                className="nav-item"
                style={{
                  fontSize: "17px",
                  marginLeft: "-30px",
                  color: "black",
                }}>
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {props.props.isAdminLoggedIn ||
              props.props.isUserLoggedIn ? null : (
                <li className="nav-item ">
                  <Link
                    to="admin-login"
                    className="nav-link "
                    style={{
                      fontSize: "17px",
                      marginLeft: "-30px",
                      color: "black",
                    }}>
                    Admin Login
                  </Link>
                </li>
              )}
              {props.props.isAdminLoggedIn ||
              props.props.isUserLoggedIn ? null : (
                <li className="nav-item">
                  <Link
                    to={"employee-login"}
                    className="nav-link "
                    style={{
                      fontSize: "17px",
                      marginLeft: "-30px",
                      color: "black",
                    }}>
                    Employee Login
                  </Link>
                </li>
              )}
              {props.props.isAdminLoggedIn ? (
                <li className="nav-item">
                  <Link to={"admin-dashboard"} className="nav-link text-light">
                    Admin Dashboard
                  </Link>
                </li>
              ) : null}
              {props.props.isAdminLoggedIn ? (
                <li className="nav-item">
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      props.props.setIsAdminLoggedIn(false);
                      navigate("/");
                    }}>
                    Logout
                  </button>
                </li>
              ) : null}
              {props.props.isUserLoggedIn ? (
                <li className="nav-item">
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      props.props.setIsUserLoggedIn(false);
                      navigate("/");
                    }}>
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComp;
