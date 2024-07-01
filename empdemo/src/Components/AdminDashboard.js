import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import EmployeeService from "../services/EmployeeService";

const AdminDashboard = (props) => {
  let [employees, setEmployees] = useState([]);

  let navigate = useNavigate();
  const base_url = "http://localhost:8080/api/v1/employees";

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    axios
      .get(base_url)
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    axios
      .delete(`http://localhost:8080/api/v1/financial-details/${employeeId}`)
      .then(() => {
        getAllEmployees();
        // alert("Employee deleted successfully");
        axios
          .delete(
            `http://localhost:8080/api/v1/professional-details/${employeeId}`
          )
          .then(() => {
            getAllEmployees();
            // alert("Employee deleted successfully");
            axios
              .get(
                `http://localhost:8080/api/v1/project-details/employee/${employeeId}`
              )
              .then((res) => {
                console.log(res.data[0]);
                let proj = res.data[0];
                axios
                  .delete(
                    `http://localhost:8080/api/v1/project-details/${proj.projectId}`
                  )
                  .then(() => {
                    console.log("Project details deleted");
                  })
                  .catch(() => {
                    console.log("error in deleting project details");
                  });
              })
              .catch(() => {
                console.log("error in deleting project details");
              })
              .then((res) => {
                getAllEmployees();
                // alert("Employee deleted successfully");
              })
              .catch(() => {
                alert("Error deleting employee");
              });
          })
          .catch(() => {
            alert("Error deleting employee");
          });
      })
      .catch(() => {
        alert("Error deleting employee");
      });
    axios
      .delete(`http://localhost:8080/api/v1/employees/${employeeId}`)
      .then(() => {
        console.log("deleted");
        alert("Employee deleted successfully");
      })
      .catch(() => {
        console.log("error");
      });
  };

  const updateEmployee = (employee) => {
    props.props.setUpdateEmployeeId(employee.id); // Assuming setEmployeeServiceState is the callback function received as a prop
    if (!props.props.update) {
      props.props.setUpdate(true);
    }
    navigate(`/update-employee`);
    // navigate(`/edit-employee`);
    // navigate(`/edit-employee/${employee.id}`);
  };

  const viewEmployee = (employee) => {
    props.props.setViewEmployeeId(employee.id);
    navigate(`/view-employee/${employee.id}`);
  };
  if (props.props.isAdminLoggedIn) {
    return (
      <div className="container">
        <h2 className="text-center"> List Employees </h2>
        <Link
          to="/add-employee"
          className="btn btn-primary mb-2"
          onClick={() => {
            if (props.props.update) {
              props.props.setUpdate(false);
            }
          }}>
          {" "}
          Add Employee{" "}
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th> Employee Id </th>
            <th> Employee Name </th>
            <th> Employee Email Id </th>
            <th className="text-center"> Actions </th>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.id} </td>
                <td> {employee.name} </td>
                <td>{employee.email}</td>
                <td className="tect-center">
                  <button
                    className="btn btn-info"
                    onClick={() => updateEmployee(employee)}>
                    Update{" "}
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={() => viewEmployee(employee)}
                    style={{ marginLeft: "10px" }}>
                    {" "}
                    View
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                    style={{ marginLeft: "10px" }}>
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h2>You don't have access </h2>;
  }
};
export default AdminDashboard;
