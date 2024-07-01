import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import axios from "axios";

const UpdateEmployeeComp = (props) => {
  let navigate = useNavigate();
  //   console.log(props);
  //   const [id, setId] = useState();
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [current_add, setCurrent_add] = useState("");
  //   const [permenant_add, setPermenant_add] = useState("");
  //   const history = useHistory();
  //   const { id } = useParams();
  const [update, setUpdate] = useState(false);

  const base_url = "http://localhost:8080/api/v1/employees";

  let [newEmployee, setNewEmployee] = useState({
    id: null,
    name: "",
    age: null,
    gender: "",
    phone: "",
    email: "",
    current_add: "",
    permenant_add: "",
  });

  if (props.props.update && !update) {
    axios
      .get(`${base_url}/${props.props.updateEmployeeId}`)
      .then((response) => {
        setNewEmployee(response.data);
        console.log(response.data);
      });
    setUpdate(true);
  }

  const UpdateEmployee = (newEmployee) => {
    // e.preventDefault();
    axios
      .put(`${base_url}/${newEmployee.id}`, newEmployee)
      .then((response) => {
        alert("Employee updated successfully");
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        alert("Error updating employee");
      });
    // axios
    //   .put(`${base_url}/update/${employee.id}`, employee)
    //   .then((response) => {
    //     alert("Employee updated successfully");
    //   })
    //   .catch((error) => {
    //     alert("Error updating employee");
    //   });
  };

  // };

  // const AddEmployee = (newEmployee) => {
  //   // e.preventDefault();
  //   axios
  //     .post(`${base_url}`, newEmployee)
  //     .then((response) => {
  //       alert("Employee added successfully");
  //     })
  //     .catch((error) => {
  //       alert("Error adding employee");
  //     });
  // axios
  //   .post(`${base_url}/addEmp/`, employee)
  //   .then((response) => {
  //     alert("Employee added successfully");
  //   })
  //   .catch((error) => {
  //     alert("Error adding employee");
  //   });
  // };

  //   useEffect(() => {
  //     if (props.props.update) {
  //       const employee = props.props.updateEmployee;
  //       setId(employee.id);
  //       setName(employee.name);
  //       setAge(employee.age);
  //       setGender(employee.gender);
  //       setPhone(employee.phone);
  //       setEmail(employee.email);
  //       setCurrent_add(employee.current_add);
  //       setPermenant_add(employee.permenant_add);
  //     }
  //   }, [props.props.update, props.props.updateEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.props.update) {
      UpdateEmployee(newEmployee);
    }
    // else {
    //   AddEmployee(newEmployee);
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
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form  onSubmit={handleSubmit}>
                <div className="form-group mb-2">
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
                <div className="form-group mb-2">
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

                <div className="form-group mb-2">
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

                <div className="form-group mb-2">
                  <label className="form-label"> Gender :</label>

                  <input
                    className="form-check-input"
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
                    className="form-check-input"
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

                <div className="form-group mb-2">
                  <label className="form-label"> Phone :</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    name="phone"
                    className="form-control"
                    value={newEmployee.phone}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, phone: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Email :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={newEmployee.email}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, email: e.target.value })
                    }></input>
                </div>
                <div className="form-group mb-2">
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
                <div className="form-group mb-2">
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
                  <button
                  type="submit"
                  className="btn btn-success"
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
  );
};

export default UpdateEmployeeComp;
