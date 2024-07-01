import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import AddEmployeeComponent from "./Components/Add_Details_Comps/AddEmployeeComponent";
import AdminDashboard from "./Components/AdminDashboard";
import EmployeeService from "./services/EmployeeService";
import { useState } from "react";
// import NewEmployeeComp from "./Components/UpdateEmployeeComp";
import UpdateEmployeeComp from "./Components/updateComps/UpdateEmployeeComp";
import ViewEmployeeComp from "./Components/ViewEmployeeComp";
import NavbarComp from "./Components/NavbarComp";
import AdminLoginComp from "./Components/LoginComponents/AdminLoginComp";
import HomeComp from "./Components/HomeComp";
import EmployeeLoginComp from "./Components/LoginComponents/EmployeeLoginComp";
import UpdateComp from "./Components/updateComps/UpdateComp";
import AddNewEmp from "./Components/Add_Details_Comps/AddNewEmp";

function App() {
  let [updateEmployee, setUpdateEmployee] = useState({});
  let [updateEmployeeId, setUpdateEmployeeId] = useState(null);
  let [viewEmployeeId, setViewEmployeeId] = useState(null);
  let [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  let [update, setUpdate] = useState(false);
  return (
    <div>
      <Router>
        <NavbarComp
          // className="navbar "
          props={{
            isAdminLoggedIn,
            setIsAdminLoggedIn,
            isUserLoggedIn,
            setIsUserLoggedIn,
          }}
        />
        {/* <HeaderComponent /> */}
        <div className="container">
          <Routes>
            {/* {isAdminLoggedIn ? (
              <> */}
            <Route
              exact
              path="/admin-dashboard"
              element={
                <AdminDashboard
                  props={{
                    updateEmployee,
                    setUpdateEmployee,
                    update,
                    setUpdate,
                    updateEmployeeId,
                    setUpdateEmployeeId,
                    viewEmployeeId,
                    setViewEmployeeId,
                    isAdminLoggedIn,
                    setIsAdminLoggedIn,
                  }}
                />
              }></Route>
            <Route
              path="/add-employee"
              element={
                <AddNewEmp
                  props={{
                    updateEmployee,
                    setUpdateEmployee,
                    update,
                    setUpdate,
                    isAdminLoggedIn,
                    setIsAdminLoggedIn,
                  }}
                />
              }></Route>

            <Route
              path="/edit-employee"
              // path="/edit-employee/:id"
              element={
                <UpdateEmployeeComp
                  props={{
                    updateEmployee,
                    setUpdateEmployee,
                    update,
                    setUpdate,
                    updateEmployeeId,
                    setUpdateEmployeeId,
                    isAdminLoggedIn,
                    setIsAdminLoggedIn,
                  }}
                />
              }></Route>
            {/* --------------------------------------------- */}
            <Route
              path="/update-employee"
              // path="/edit-employee/:id"
              element={
                <UpdateComp
                  props={{
                    updateEmployee,
                    setUpdateEmployee,
                    update,
                    setUpdate,
                    updateEmployeeId,
                    setUpdateEmployeeId,
                    isAdminLoggedIn,
                    setIsAdminLoggedIn,
                  }}
                />
              }></Route>
            {/* -------------------------------------------- */}
            <Route
              path="/view-employee/:id"
              element={
                <ViewEmployeeComp
                  props={{
                    viewEmployeeId,
                    setViewEmployeeId,
                    isAdminLoggedIn,
                    setIsAdminLoggedIn,
                    isUserLoggedIn,
                    setIsUserLoggedIn,
                  }}
                />
              }></Route>
            {/* </>
            ) : (
              <> */}
            <Route
              path="admin-login"
              element={
                <AdminLoginComp
                  props={{ isAdminLoggedIn, setIsAdminLoggedIn }}
                />
              }></Route>
            <Route
              path="employee-login"
              element={
                <EmployeeLoginComp
                  props={{
                    viewEmployeeId,
                    setViewEmployeeId,
                    isUserLoggedIn,
                    setIsUserLoggedIn,
                  }}
                />
              }></Route>
            {/* </> */}
            {/* )} */}
            {/* <Route
              path="/employees"
              element={<ListEmployeeComponent />}></Route> */}

            <Route path="/" element={<HomeComp />}></Route>
          </Routes>
        </div>
        {/* <FooterComponent /> */}
      </Router>
      {/* <AddEmployeeComponent /> */}
    </div>
  );
}

export default App;
