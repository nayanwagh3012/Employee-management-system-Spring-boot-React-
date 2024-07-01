import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import axios from "axios";

const UpdateComp = (props) => {
  let navigate = useNavigate();

  const [update, setUpdate] = useState(false);

  const base_url = "http://localhost:8080/api/v1/employees";
  const base_url_professional =
    "http://localhost:8080/api/v1/professional-details";

  const base_url_project = "http://localhost:8080/api/v1/project-details";
  const base_url_financial = "http://localhost:8080/api/v1/financial-details";

  let [newEmployee, setNewEmployee] = useState({
    id: { id: null },
    name: "",
    age: null,
    gender: "",
    phone: "",
    email: "",
    current_add: "",
    permenant_add: "",
  });

  let [newProfessional, setNewProfessional] = useState({
    employeeId: { id: null },
    role: " ",
    designation: "",
    dateOfJoining: "",
    companyEmail: "",
    reportingManager: "",
    hrName: "",
    location: "",
    officeAddress: "",
  });

  let [newProject, setNewProject] = useState({
    employeeId: { id: null },
    projectId: "",
    clientName: "",
    description: "",
    endDate: "",
    projectName: "",
    startDate: "",
  });

  let [newFinancial, setNewFinancial] = useState({
    employeeId: { id: null },
    accountNumber: "",
    bankName: "",
    branchName: "",
    ifscCode: "",
    salaryDetails: "",
  });

  if (props.props.update && !update) {
    axios
      .get(`${base_url}/${props.props.updateEmployeeId}`)
      .then((response) => {
        setNewEmployee(response.data);
        console.log(response.data);
      });

    axios
      .get(`${base_url_professional}/${props.props.updateEmployeeId}`)
      .then((response) => {
        setNewProfessional(response.data);
        console.log(response.data);
      });

    axios
      .get(`${base_url_project}`, {
        employee: { id: props.props.updateEmployeeId },
      })
      .then((response) => {
        setNewProject(response.data[0]);
        console.log(response.data[0]);
      });

    axios
      .get(`${base_url_financial}/${props.props.updateEmployeeId}`)
      .then((response) => {
        setNewFinancial(response.data);
        console.log(response.data);
      });

    setUpdate(true);
  }

  const UpdateEmployee = (newEmployee) => {
    // e.preventDefault();
    axios
      .put(`${base_url}/${newEmployee.id}`, newEmployee)
      .then((response) => {
        console.log("Employee updated successfully");
        alert("Employee updated successfully");
        console.log(response.data);
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        alert("Error updating employee");
      });
  };

  const UpdateProfessional = (newProfessional) => {
    // e.preventDefault();
    axios
      .put(
        `${base_url_professional}/${newProfessional.employee.id}`,
        newProfessional
      )
      .then((response) => {
        console.log("Employee Professional updated successfully");
        // alert("Employee Professional updated successfully");
        console.log(response.data);
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        alert("Error updating employee professional" + error.message);
      });
  };

  // .........................
  const UpdateProject = (newProject) => {
    // e.preventDefault();
    axios
      .put(`${base_url_project}/${newProject.projectId}`, newProject)
      .then((response) => {
        console.log("Employee Project updated successfully");
        console.log(response.data);
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        alert("Error updating employee professional" + error.message);
      });
  };

  const UpdateFinancial = (newFinancial) => {
    // e.preventDefault();
    axios
      .put(`${base_url_financial}/${newFinancial.employee.id}`, newFinancial)
      .then((response) => {
        console.log("Employee Financia; updated successfully");
        // alert("Employee Financia; updated successfully");
        console.log(response.data);
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        alert("Error updating employee professional" + error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.props.update) {
      UpdateEmployee(newEmployee);
      UpdateProfessional(newProfessional);
      UpdateProject(newProject);
      UpdateFinancial(newFinancial);
    }
  };

  const title = () => {
    if (props.props.update) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div className="mt-5">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 border border-primary p-4">
            <h2 className="text-center">Update Employee Details</h2>
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Employee ID :</label>
                    <input
                      type="number"
                      placeholder="Enter Employee ID"
                      name="empid"
                      className="form-control"
                      value={newEmployee.id}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, id: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Name :</label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      className="form-control"
                      value={newEmployee.name}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, name: e.target.value })
                      }></input>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Age :</label>
                    <input
                      type="number"
                      placeholder="Enter Age"
                      name="age"
                      className="form-control"
                      value={newEmployee.age}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, age: e.target.value })
                      }></input>
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Gender :</label>
                    <br />
                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={newEmployee.gender === "M"}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, gender: "M" })
                      }
                    />
                    <label className="form-check-label " htmlFor="Male">
                      Male
                    </label>

                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={newEmployee.gender === "F"}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, gender: "F" })
                      }
                    />
                    <label className="form-check-label " htmlFor="Female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Phone :</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      className="form-control"
                      value={newEmployee.phone}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Email :</label>
                    <input
                      type="email"
                      placeholder="Enter email Id"
                      name="emailId"
                      className="form-control"
                      value={newEmployee.email}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          email: e.target.value,
                        })
                      }></input>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Current Address :</label>
                    <input
                      type="text"
                      placeholder="Enter current address"
                      name="currentAddress"
                      className="form-control"
                      value={newEmployee.current_add}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          current_add: e.target.value,
                        })
                      }></input>
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Permenant Address :</label>
                    <input
                      type="text"
                      placeholder="Enter permenant address"
                      name="permenant_address"
                      className="form-control"
                      value={newEmployee.permenant_add}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          permenant_add: e.target.value,
                        })
                      }></input>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="btn btn-success my-2"
                  onClick={(e) => handleSubmit(e)}>
                  Submit
                </button> */}

                {/* {props.props.update ? (
                  <button
                    className="btn btn-success"
                    onClick={(e) => UpdateEmployee(employee)}>
                    Submit{" "}
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={(e) => AddEmployee(employee)}>
                    Submit{" "}
                  </button>
                )} */}
                {/* <Link to="/employees" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link> */}
              </form>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------- */}

        <div className="row mt-5 ">
          <div className="col-12 border border-primary p-4">
            <h2 className="text-center">Update Professional Details</h2>
            <div className="col-12 ">
              <form>
                {/* <div className="form-group mb-2">
                  <label className="form-label"> Employee ID :</label>
                  <input
                    type="number"
                    placeholder="Enter Employee ID"
                    name="empid"
                    className="form-control"
                    value={newEmployee.id}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, id: e.target.value })
                    }
                  />
                </div> */}
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Role :</label>
                    <input
                      type="text"
                      placeholder="Enter role"
                      name="role"
                      className="form-control"
                      value={newProfessional.role}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          role: e.target.value,
                        })
                      }></input>
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Designation :</label>
                    <input
                      type="text"
                      placeholder="Enter designation"
                      name="designation"
                      className="form-control"
                      value={newProfessional.designation}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          designation: e.target.value,
                        })
                      }></input>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Date of Joining :</label>

                    <input
                      className="form-control"
                      type="date"
                      name="dateofjoining"
                      value={newProfessional.dateOfJoining}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          dateOfJoining: e.target.value,
                        })
                      }
                    />
                    {/* <span>{newProfessional.dateOfJoining} </span> */}
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Company Email :</label>
                    <input
                      type="email"
                      placeholder="Enter company email"
                      name="company_email"
                      className="form-control"
                      value={newProfessional.companyEmail}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          companyEmail: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Reporting Manager :</label>
                    <input
                      type="text"
                      placeholder="Enter a reporting manager"
                      name="reportingManager"
                      className="form-control"
                      value={newProfessional.reportingManager}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          reportingManager: e.target.value,
                        })
                      }></input>
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> HR Name :</label>
                    <input
                      type="text"
                      placeholder="Enter HR Name"
                      name="hrName"
                      className="form-control"
                      value={newProfessional.hrName}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          hrName: e.target.value,
                        })
                      }></input>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Location :</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      name="location"
                      className="form-control"
                      value={newProfessional.location}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          location: e.target.value,
                        })
                      }></input>
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Office Address :</label>
                    <input
                      type="text"
                      placeholder="Enter office address"
                      name="officeAddress"
                      className="form-control"
                      value={newProfessional.officeAddress}
                      onChange={(e) =>
                        setNewProfessional({
                          ...newProfessional,
                          officeAddress: e.target.value,
                        })
                      }></input>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="btn btn-success my-2"
                  onClick={(e) => handleSubmit(e)}>
                  Submit
                </button> */}

                {/* {props.props.update ? (
                  <button
                    className="btn btn-success"
                    onClick={(e) => UpdateEmployee(employee)}>
                    Submit{" "}
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={(e) => AddEmployee(employee)}>
                    Submit{" "}
                  </button>
                )} */}
                {/* <Link to="/employees" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link> */}
              </form>
            </div>
          </div>
        </div>

        {/* ----------------------------------------Project-------------------------------------------------- */}

        <div className="row mt-5 ">
          <div className="col-12 border border-primary p-4">
            <h2 className="text-center">Update Project Details</h2>
            <div className="col-12 ">
              <form>
                {/* <div className="form-group mb-2">
                  <label className="form-label"> Employee ID :</label>
                  <input
                    type="number"
                    placeholder="Enter Employee ID"
                    name="empid"
                    className="form-control"
                    value={newEmployee.id}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, id: e.target.value })
                    }
                  />
                </div> */}
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Project Id:</label>
                    <input
                      type="text"
                      placeholder="Enter project id"
                      name="proj"
                      className="form-control"
                      value={newProject.projectId}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          projectId: e.target.value,
                        })
                      }></input>
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Client Name :</label>
                    <input
                      type="text"
                      placeholder="Enter client name"
                      name="clientName"
                      className="form-control"
                      value={newProject.clientName}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          clientName: e.target.value,
                        })
                      }></input>
                  </div>

                  <div className="row">
                    <div className="form-group mb-2 col-6">
                      <label className="form-label"> Description :</label>
                      <input
                        type="text"
                        placeholder="Enter Description "
                        name="desc"
                        className="form-control"
                        value={newProject.description}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            description: e.target.value,
                          })
                        }></input>
                    </div>
                    {/* <div className="row"> */}

                    <div className="form-group mb-2 col-6">
                      <label className="form-label"> Project Name :</label>
                      <input
                        type="text"
                        placeholder="Enter Project Name"
                        name="company_email"
                        className="form-control"
                        value={newProject.projectName}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            projectName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="row">
                      {/* </div> */}
                      <div className="form-group mb-2 col-6">
                        <label className="form-label"> Start Date :</label>
                        <input
                          type="date"
                          placeholder="Enter a Start Date"
                          name="reportingManager"
                          className="form-control"
                          value={newProject.startDate}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              startDate: e.target.value,
                            })
                          }></input>
                      </div>
                      <div className="form-group mb-2 col-6">
                        <label className="form-label"> End Date:</label>

                        <input
                          className="form-control"
                          type="date"
                          name="enddate"
                          value={newProject.endDate}
                          onChange={(e) =>
                            setNewProject({
                              ...newProject,
                              endDate: e.target.value,
                            })
                          }
                        />
                        {/* <span>{newProfessional.dateOfJoining} </span> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="btn btn-success my-2"
                  onClick={(e) => handleSubmit(e)}>
                  Submit
                </button> */}

                {/* {props.props.update ? (
                  <button
                    className="btn btn-success"
                    onClick={(e) => UpdateEmployee(employee)}>
                    Submit{" "}
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={(e) => AddEmployee(employee)}>
                    Submit{" "}
                  </button>
                )} */}
                {/* <Link to="/employees" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link> */}
              </form>
            </div>
          </div>

          {/* ...........................................FInancial ..................................... */}

          <div className="row mt-5 ">
            <div className="col-12 border border-primary p-4">
              <h2 className="text-center">Update Financial Details</h2>
              <div className="col-12 ">
                <form>
                  {/* <div className="form-group mb-2">
                  <label className="form-label"> Employee ID :</label>
                  <input
                    type="number"
                    placeholder="Enter Employee ID"
                    name="empid"
                    className="form-control"
                    value={newEmployee.id}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, id: e.target.value })
                    }
                  />
                </div> */}
                  <div className="row">
                    <div className="form-group mb-2 col-6">
                      <label className="form-label">Account No</label>
                      <input
                        type="text"
                        placeholder="Enter project id"
                        name="id"
                        className="form-control"
                        value={newFinancial.accountNumber}
                        onChange={(e) =>
                          setNewFinancial({
                            ...newFinancial,
                            accountNumber: e.target.value,
                          })
                        }></input>
                    </div>

                    <div className="form-group mb-2 col-6">
                      <label className="form-label"> Bank Name :</label>
                      <input
                        type="text"
                        placeholder="Enter bank name"
                        name="bkname"
                        className="form-control"
                        value={newFinancial.bankName}
                        onChange={(e) =>
                          setNewFinancial({
                            ...newFinancial,
                            bankName: e.target.value,
                          })
                        }></input>
                    </div>

                    <div className="row">
                      <div className="form-group mb-2 col-6">
                        <label className="form-label"> branchName Name :</label>
                        <input
                          type="text"
                          placeholder="Enter branchName Name "
                          name="br"
                          className="form-control"
                          value={newFinancial.branchName}
                          onChange={(e) =>
                            setNewFinancial({
                              ...newFinancial,
                              branchName: e.target.value,
                            })
                          }></input>
                      </div>
                      {/* <div className="row"> */}
                      <div className="form-group mb-2 col-6">
                        <label className="form-label"> IFSC Code:</label>

                        <input
                          className="form-control"
                          type="text"
                          name="ifccode"
                          value={newFinancial.ifscCode}
                          onChange={(e) =>
                            setNewFinancial({
                              ...newFinancial,
                              ifscCode: e.target.value,
                            })
                          }
                        />
                        {/* <span>{newProfessional.dateOfJoining} </span> */}
                      </div>

                      <div className="row">
                        <div className="form-group mb-2 col-6">
                          <label className="form-label">
                            {" "}
                            Salary Details :
                          </label>
                          <input
                            type="text"
                            placeholder="Enter salary details"
                            name="sal"
                            className="form-control"
                            value={newFinancial.salaryDetails}
                            onChange={(e) =>
                              setNewFinancial({
                                ...newFinancial,
                                salaryDetails: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success my-2"
                    onClick={(e) => handleSubmit(e)}>
                    Submit
                  </button>
                  {/* {props.props.update ? (
                  <button
                    className="btn btn-success"
                    onClick={(e) => UpdateEmployee(employee)}>
                    Submit{" "}
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={(e) => AddEmployee(employee)}>
                    Submit{" "}
                  </button>
                )} */}
                  {/* <Link to="/employees" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateComp;
