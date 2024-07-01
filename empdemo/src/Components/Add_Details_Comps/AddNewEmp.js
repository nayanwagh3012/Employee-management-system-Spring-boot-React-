import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import axios from "axios";

const AddNewEmp = (props) => {
  // console.log(props);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [current_add, setCurrent_add] = useState("");
  const [permenant_add, setPermenant_add] = useState("");
  //   const history = useHistory();
  //   const { id } = useParams();
  //   -------------------------professional ------------------------
  const [role, setRole] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [hrName, setHrName] = useState("");
  const [location, setLocation] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  // ------------------------------------------------------

  // .....................Project Details..........................

  const [projectId, setProjid] = useState("");
  const [clientName, setClientname] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setendDate] = useState("");
  const [projectName, setProjname] = useState("");
  const [startDate, setStartdate] = useState("");

  // .....................Project Details ends.......................

  // .....................Financial Details..........................

  const [accountNumber, setAcountno] = useState("");
  const [bankName, setBankname] = useState("");
  const [branchName, setBranchname] = useState("");

  const [ifscCode, setIfscode] = useState("");
  const [salaryDetails, setSalarydetails] = useState("");

  // .....................Project Details ends.......................

  // -----------login-------------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // --------------------------

  const [update, setUpdate] = useState(false);
  const [errors, setErrors] = useState({});

  const base_url = "http://localhost:8080/api/v1/employees";
  const base_url_professional =
    "http://localhost:8080/api/v1/professional-details";
  const base_url_project = "http://localhost:8080/api/v1/project-details";
  const base_url_financial = "http://localhost:8080/api/v1/financial-details";

  let employee = {
    id,
    name,
    age,
    gender,
    phone,
    email,
    current_add,
    permenant_add,
  };

  let professional = {
    employeeId: employee.id,
    role,
    designation,
    dateOfJoining,
    companyEmail,
    reportingManager,
    hrName,
    location,
    officeAddress,
  };

  let project = {
    employeeId: employee.id,
    projectId,
    clientName,
    description,
    endDate,
    projectName,
    startDate,
  };

  let financial = {
    employeeId: employee.id,
    accountNumber,
    bankName,
    branchName,
    ifscCode,
    salaryDetails,
  };

  if (props.props.update) {
    employee = props.props.updateEmployee;
    // props.props.setUpdate(true);
    axios
      .get(base_url + "/findEmp/" + id)
      .then((response) => {
        setId(response.data.id);
        setName(response.data.name);
        setAge(response.data.age);
        setGender(response.data.gender);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setCurrent_add(response.data.current_add);
        setPermenant_add(response.data.permenant_add);
      })
      .catch((error) => {
        console.log(error);
      });
    setUpdate(true);
  }

  const UpdateEmployee = (employee) => {
    // e.preventDefault();
    axios
      .put(`${base_url}${employee.id}`, employee)
      .then((response) => {
        alert("Employee updated successfully");
      })
      .catch((error) => {
        alert("Error updating employee");
      });
    // axios
    //   .put(${base_url}/update/${employee.id}, employee)
    //   .then((response) => {
    //     alert("Employee updated successfully");
    //   })
    //   .catch((error) => {
    //     alert("Error updating employee");
    //   });
  };

  // };

  const AddEmployee = (employee) => {
    // e.preventDefault();
    axios
      .post(base_url, employee)
      .then((response) => {
        alert("Employee added successfully");

        axios
          .post(base_url_professional, professional)
          .then((response) => {
            alert("Professional details added successfully");

            axios
              .post(base_url_project, project)
              .then((response) => {
                alert("Proj details added successfully");

                axios
                  .post(base_url_financial, financial)
                  .then((response) => {
                    alert("financial details added successfully");
                  })

                  .catch((error) => {
                    alert("Error adding financial details" + error.message);
                  });
              })
              .catch((error) => {
                alert("Error adding project details" + error.message);
              });
          })

          .catch((error) => {
            alert("Error adding professional details" + error.message);
          });
      })

      .catch((error) => {
        alert("Error adding employee");
      });
  };

  // axios
  //   .post(${base_url}/addEmp/, employee)
  //   .then((response) => {
  //     alert("Employee added successfully");
  //   })
  //   .catch((error) => {
  //     alert("Error adding employee");
  //   });
  /*
  let addProfessional = (professional) => {
    axios
      .post(base_url_professional, professional)
      .then((response) => {
        alert("Professional details added successfully");
      })
      .catch((error) => {
        alert("Error adding professional details" + error.message);
      });
  };

  let addProject = (project) => {
    axios
      .post(base_url_project, project)
      .then((response) => {
        alert("Proj details added successfully");
      })
      .catch((error) => {
        alert("Error adding projdetails" + error.message);
      });
  };

  let addFinanacial = (financial) => {
    axios
      .post(base_url_financial, financial)
      .then((response) => {
        alert("financial details added successfully");
      })
      .catch((error) => {
        alert("Error adding financialdetails" + error.message);
      });
  };*/

  let createLogin = (employee) => {
    // Assuming setUsername and setPassword are state setters
    setUsername(employee.email);
    let tempPass =
      employee.name.substr(0, 4) + "@" + employee.phone.substr(0, 4);
    setPassword(tempPass);

    const loginDetails = {
      // Assuming loginDetails should be defined here
      employeeId: employee.id,
      username: employee.email,
      password: tempPass,
    };

    axios
      .post("http://localhost:8080/api/v1/login-credentials", loginDetails)
      .then(() => {
        console.log("Login added");
      })
      .catch((error) => {
        console.log("Error in adding login:", error);
      });
  };

  useEffect(() => {
    if (props.props.update) {
      const employee = props.props.updateEmployee;
      setId(employee.id);
      setName(employee.name);
      setAge(employee.age);
      setGender(employee.gender);
      setPhone(employee.phone);
      setEmail(employee.email);
      setCurrent_add(employee.current_add);
      setPermenant_add(employee.permenant_add);
    }
  }, [props.props.update, props.props.updateEmployee]);

  // Validation
  const vali = () => {
    let errors = {};
    if (id === null) {
      errors.id = "ID is required";
    }
    if (name === "") {
      errors.name = "Name is required";
    }

    if (age === "") {
      errors.age = "Age is required";
    } else if (age < 20 || age > 70) {
      errors.age = "Age should be between 20 and 70";
    }
    if (gender === "") {
      errors.gender = "Gender is required";
    }
    if (phone === "") {
      errors.phone = "Phone is required";
    } else if (phone.length !== 10) {
      errors.phone = "Phone number should be 10 digits";
    }
    if (email === "") {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (current_add === "") {
      errors.current_add = "Current address is required";
    }
    if (permenant_add === "") {
      errors.permenant_add = "Permenant address is required";
    }

    if (role === "") {
      errors.role = "Role is required";
    }
    if (designation === "") {
      errors.designation = "Designation is required";
    }
    if (dateOfJoining === "") {
      errors.dateOfJoining = "Date Of Joining is required";
    }
    if (designation === "") {
      errors.designation = "Designation is required";
    }
    if (companyEmail === "") {
      errors.companyEmail = " Company Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyEmail)) {
      errors.companyEmail = "Invalid email format";
    }
    if (reportingManager === "") {
      errors.reportingManager = "Reporting Manager is required";
    }
    if (hrName === "") {
      errors.hrName = "HR Name is required";
    }
    if (role === "") {
      errors.role = "Role is required";
    }
    if (location === "") {
      errors.location = "Location is required";
    }
    if (officeAddress === "") {
      errors.officeAddress = "Office Address is required";
    }

    if (projectId === "") {
      errors.projectId = "Project ID is required";
    }
    if (clientName === "") {
      errors.clientName = "Client Name is required";
    }
    if (description === "") {
      errors.description = "Project Description is required";
    }
    if (role === "") {
      errors.role = "Role is required";
    }
    if (endDate === "") {
      errors.endDate = "End Date is required";
    }
    if (projectName === "") {
      errors.projectName = "Project Name is required";
    }
    if (startDate === "") {
      errors.startDate = "Start Date is required";
    }

    if (accountNumber === "") {
      errors.accountNumber = "Account Number is required";
    } else if (isNaN(accountNumber)) {
      errors.accountno = "Account Number must be a valid number";
    }
    if (bankName === "") {
      errors.bankName = "Bank Name is required";
    }
    if (branchName === "") {
      errors.branchName = "Branch is required";
    }
    if (ifscCode === "") {
      errors.ifscode = "IFSC is required";
    }
    if (salaryDetails === "") {
      errors.salaryDetails = "Salary Details is required";
    }

    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // } else {
    //   if (props.props.update) {
    //     UpdateEmployee(employee);
    //   } else {
    //     AddEmployee(employee);
    //     addProfessional(professional);
    //     addProject(project);
    //     addFinanacial(financial);
    //   }
    // }
    setErrors({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    vali();

    //validations ends
    const employee = {
      id,
      name,
      age,
      gender,
      phone,
      email,
      current_add,
      permenant_add,
    };

    let professional = {
      employeeId: employee.id,
      role,
      designation,
      dateOfJoining,
      companyEmail,
      reportingManager,
      hrName,
      location,
      officeAddress,
    };

    let project = {
      employee: employee,
      projectId,
      clientName,
      description,
      endDate,
      projectName,
      startDate,
    };

    let financial = {
      employeeId: employee.id,
      accountNumber,
      bankName,
      branchName,
      ifscCode,
      salaryDetails,
    };
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
      if (props.props.update) {
        UpdateEmployee(employee);
      } else {
        AddEmployee(employee);
        createLogin(employee);
        // addProfessional(professional);
        // addProject(project);
        // addFinanacial(financial);
      }
    }
    // if (props.props.update) {
    //   UpdateEmployee(employee);
    // } else {
    //   AddEmployee(employee);
    //   addProfessional(professional);
    //   addProject(project);
    //   addFinanacial(financial);
    // }
  };

  const title = () => {
    if (props.props.update) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <form className="col-12">
          <div className="row my-3">
            <div className="accordion-header">{title()}</div>

            <div className="  col-12">
              <div className=" col-12">
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Employee ID :</label>
                    <input
                      type="number"
                      placeholder="Enter Employee ID"
                      name="empid"
                      className={`form-control ${
                        errors.id ? "is-invalid" : ""
                      }`}
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      required></input>
                    {errors.id && (
                      <div className="invalid-feedback">{errors.id}</div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Name :</label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}></input>
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Age :</label>
                    <input
                      type="number"
                      placeholder="Enter Age"
                      name="age"
                      className={`form-control ${
                        errors.age ? "is-invalid" : ""
                      }`}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}></input>
                    {errors.age && (
                      <div className="invalid-feedback">{errors.age}</div>
                    )}
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Gender :</label>
                    <br />
                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === "M"}
                      onChange={(e) => setGender("M")}
                    />
                    <label className="form-check-label " htmlFor="Male">
                      Male
                    </label>

                    <input
                      className="form-check-input mx-2"
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === "F"}
                      onChange={(e) => setGender("F")}
                    />
                    <label className="form-check-label " htmlFor="Female">
                      Female
                    </label>
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Phone :</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      name="emailId"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      min={10}
                      max={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}></input>
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Email :</label>
                    <input
                      type="email"
                      placeholder="Enter email Id"
                      name="emailId"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></input>
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Current Address :</label>
                    <input
                      type="text"
                      placeholder="Enter current address"
                      name="currentAddress"
                      className={`form-control ${
                        errors.current_add ? "is-invalid" : ""
                      }`}
                      value={current_add}
                      onChange={(e) => setCurrent_add(e.target.value)}></input>
                    {errors.current_add && (
                      <div className="invalid-feedback">
                        {errors.current_add}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Permenant Address :</label>
                    <input
                      type="text"
                      placeholder="Enter permenant address"
                      name="permenant_address"
                      className={`form-control ${
                        errors.permenant_add ? "is-invalid" : ""
                      }`}
                      value={permenant_add}
                      onChange={(e) =>
                        setPermenant_add(e.target.value)
                      }></input>
                    {errors.permenant_add && (
                      <div className="invalid-feedback">
                        {errors.permenant_add}
                      </div>
                    )}
                  </div>
                </div>

                {/*Professional details starts  */}
                {/* </form> */}
              </div>
            </div>
          </div>

          <div className="row my-3">
            <center>
              <h3> Professional details</h3>
            </center>

            <div className="  col-12">
              <div className=" col-12">
                {/* <form className="col-12"> */}
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Role :</label>
                    <input
                      type="text"
                      placeholder="Enter Employee Role"
                      name="emprole"
                      className={`form-control ${
                        errors.role ? "is-invalid" : ""
                      }`}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}></input>
                    {errors.role && (
                      <div className="invalid-feedback">{errors.role}</div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Designation :</label>
                    <input
                      type="text"
                      placeholder="Enter name designation"
                      name="name"
                      className={`form-control ${
                        errors.designation ? "is-invalid" : ""
                      }`}
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}></input>
                    {errors.designation && (
                      <div className="invalid-feedback">
                        {errors.designation}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Date of joining :</label>
                    <input
                      type="date"
                      placeholder="Enter date of joining"
                      name="dateofj"
                      className={`form-control ${
                        errors.dateOfJoining ? "is-invalid" : ""
                      }`}
                      value={dateOfJoining}
                      onChange={(e) =>
                        setDateOfJoining(e.target.value)
                      }></input>
                    {errors.dateOfJoining && (
                      <div className="invalid-feedback">
                        {errors.dateOfJoining}
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Company Email :</label>
                    <input
                      type="email"
                      placeholder="Enter company email Id"
                      name="emailId"
                      className={`form-control ${
                        errors.companyEmail ? "is-invalid" : ""
                      }`}
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}></input>
                    {errors.companyEmail && (
                      <div className="invalid-feedback">
                        {errors.companyEmail}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Reporting Manager :</label>
                    <input
                      type="text"
                      placeholder="Enter reporting manager "
                      name="currentAddress"
                      className={`form-control ${
                        errors.reportingManager ? "is-invalid" : ""
                      }`}
                      value={reportingManager}
                      onChange={(e) =>
                        setReportingManager(e.target.value)
                      }></input>
                    {errors.reportingManager && (
                      <div className="invalid-feedback">
                        {errors.reportingManager}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> HR Name :</label>
                    <input
                      type="text"
                      placeholder="Enter hr name"
                      name="permenant_address"
                      className={`form-control ${
                        errors.hrName ? "is-invalid" : ""
                      }`}
                      value={hrName}
                      onChange={(e) => setHrName(e.target.value)}></input>
                    {errors.hrName && (
                      <div className="invalid-feedback">{errors.hrName}</div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Office location:</label>
                    <input
                      type="text"
                      placeholder="Enter office location"
                      name="permenant_address"
                      className={`form-control ${
                        errors.location ? "is-invalid" : ""
                      }`}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}></input>
                    {errors.location && (
                      <div className="invalid-feedback">{errors.location}</div>
                    )}
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Office Address :</label>
                    <input
                      type="text"
                      placeholder="Enter office address"
                      name="permenant_address"
                      className={`form-control ${
                        errors.officeAddress ? "is-invalid" : ""
                      }`}
                      value={officeAddress}
                      onChange={(e) =>
                        setOfficeAddress(e.target.value)
                      }></input>
                    {errors.officeAddress && (
                      <div className="invalid-feedback">
                        {errors.officeAddress}
                      </div>
                    )}
                  </div>
                </div>

                {/* project details start */}
                {/* </form> */}
              </div>
            </div>
          </div>
          <div className="row my-3">
            <center>
              <h3> Project details</h3>
            </center>

            <div className="  col-12">
              <div className=" col-12">
                {/* <form className="col-12"> */}
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Project Id:</label>
                    <input
                      type="number"
                      placeholder="Enter Employee ProjectID"
                      name="empid"
                      className={`form-control ${
                        errors.projectId ? "is-invalid" : ""
                      }`}
                      value={projectId}
                      onChange={(e) => setProjid(e.target.value)}></input>
                    {errors.projectId && (
                      <div className="invalid-feedback">{errors.projectId}</div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Client Name:</label>
                    <input
                      type="text"
                      placeholder="Enter name designation"
                      name="name"
                      className={`form-control ${
                        errors.clientName ? "is-invalid" : ""
                      }`}
                      value={clientName}
                      onChange={(e) => setClientname(e.target.value)}></input>
                    {errors.clientName && (
                      <div className="invalid-feedback">
                        {errors.clientName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Project Name:</label>
                    <input
                      type="text"
                      placeholder="Enter reporting manager "
                      name="currentAddress"
                      className={`form-control ${
                        errors.projectName ? "is-invalid" : ""
                      }`}
                      value={projectName}
                      onChange={(e) => setProjname(e.target.value)}></input>
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Description:</label>
                    <input
                      type="text"
                      placeholder="Enter Description"
                      name="dateofj"
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}></input>
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label"> Start Date :</label>
                    <input
                      type="date"
                      placeholder="Enter date"
                      name="permenant_address"
                      className={`form-control ${
                        errors.startDate ? "is-invalid" : ""
                      }`}
                      value={startDate}
                      onChange={(e) => setStartdate(e.target.value)}></input>
                    {errors.startDate && (
                      <div className="invalid-feedback">{errors.startDate}</div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">End date :</label>
                    <input
                      type="date"
                      placeholder="Enter company email Id"
                      name="enddate"
                      className={`form-control ${
                        errors.endDate ? "is-invalid" : ""
                      }`}
                      value={endDate}
                      onChange={(e) => setendDate(e.target.value)}></input>
                    {errors.endDate && (
                      <div className="invalid-feedback">{errors.endDate}</div>
                    )}
                  </div>
                </div>
                {/* project details ends*/}

                {/* Financial Details start */}

                {/* </form> */}
              </div>
            </div>
          </div>
          <div className="row my-3">
            <center>
              <h3> Financial Details</h3>
            </center>

            <div className="  col-12">
              <div className=" col-12">
                {/* <form className="col-12"> */}
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">
                      {/* {" "} */}
                      Account No
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Employee Account No"
                      name="accountno"
                      className={`form-control ${
                        errors.accountNumber ? "is-invalid" : ""
                      }`}
                      value={accountNumber}
                      onChange={(e) => setAcountno(e.target.value)}></input>
                    {errors.accountNumber && (
                      <div className="invalid-feedback">
                        {errors.accountNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Bank Name:</label>
                    <input
                      type="text"
                      placeholder="Enter name "
                      name="name"
                      className={`form-control ${
                        errors.bankName ? "is-invalid" : ""
                      }`}
                      value={bankName}
                      onChange={(e) => setBankname(e.target.value)}></input>
                    {errors.bankName && (
                      <div className="invalid-feedback">{errors.bankName}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Branch Name:</label>
                    <input
                      type="text"
                      placeholder="Enter Description"
                      name="dateofj"
                      className={`form-control ${
                        errors.branchName ? "is-invalid" : ""
                      }`}
                      value={branchName}
                      onChange={(e) => setBranchname(e.target.value)}></input>
                    {errors.branchName && (
                      <div className="invalid-feedback">
                        {errors.branchName}
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-2 col-6">
                    <label className="form-label">ifsc Code</label>
                    <input
                      type="text"
                      placeholder="Enter company ifsc code"
                      name="ifscc"
                      className={`form-control ${
                        errors.ifscCode ? "is-invalid" : ""
                      }`}
                      value={ifscCode}
                      onChange={(e) => setIfscode(e.target.value)}></input>
                    {errors.ifscode && (
                      <div className="invalid-feedback">{errors.ifscode}</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group mb-2 col-6">
                    <label className="form-label">Salary Details:</label>
                    <input
                      type="text"
                      placeholder="Enter salary details "
                      name="currentAddress"
                      className={`form-control ${
                        errors.salaryDetails ? "is-invalid" : ""
                      }`}
                      value={salaryDetails}
                      onChange={(e) =>
                        setSalarydetails(e.target.value)
                      }></input>
                    {errors.salaryDetails && (
                      <div className="invalid-feedback">
                        {errors.salaryDetails}
                      </div>
                    )}
                  </div>
                </div>

                {/* Financial Details ends */}

                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  onClick={(e) => handleSubmit(e)}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEmp;
