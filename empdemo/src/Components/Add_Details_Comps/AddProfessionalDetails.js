// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AddProfessionalDetails(props) {
//   const [employeeId, setEmployeeId] = useState();
//   const [role, setRole] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [dateOfJoining, setDateOfJoining] = useState("");
//   const [companyEmail, setCompanyEmail] = useState("");
//   const [reportingManager, setReportingManager] = useState("");
//   const [hrName, setHrName] = useState("");
//   const [location, setLocation] = useState("");
//   const [officeAddress, setOfficeAddress] = useState("");
//   //   const history = useHistory();
//   //   const { id } = useParams();
//   const [update, setUpdate] = useState(false);

//   const base_url = "http://localhost:8080/api/v1/professional-details";

//   let professional = {
//     employeeId,
//     role,
//     designation,
//     dateOfJoining,
//     companyEmail,
//     reportingManager,
//     hrName,
//     location,
//     officeAddress,
//   };

//   if (props.props.update) {
//     professional = props.props.professional;
//     // props.props.setUpdate(true);
//     axios
//       .get(base_url + "/" + employeeId)
//       .then((response) => {
//         setEmployeeId(response.data.employeeId);
//         setRole(response.data.role);
//         setDesignation(response.data.designation);
//         setDateOfJoining(response.data.dateOfJoining);
//         setCompanyEmail(response.data.companyEmail);
//         setReportingManager(response.data.reportingManager);
//         setHrName(response.data.hrName);
//         setLocation(response.data.location);
//         setOfficeAddress(response.data.officeAddress);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     setUpdate(true);
//   }
//   // if (id) {
//   //   EmployeeService.updateEmployee(id, employee)
//   //     .then((response) => {
//   //       //   history.push("/employees");
//   //       console.log(response.data.employee);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }
//   // else {
//   //   EmployeeService.createEmployee(employee)
//   //     .then((response) => {
//   //       console.log(response.data);

//   //       //   history.push("/employees");
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }

//   const UpdateEmployee = (employee) => {
//     // e.preventDefault();
//     axios
//       .put(`${base_url}${professional.employeeId}`, professional)
//       .then((response) => {
//         alert("Employee updated successfully");
//       })
//       .catch((error) => {
//         alert("Error updating employee");
//       });
//     // axios
//     //   .put(`${base_url}/update/${employee.id}`, employee)
//     //   .then((response) => {
//     //     alert("Employee updated successfully");
//     //   })
//     //   .catch((error) => {
//     //     alert("Error updating employee");
//     //   });
//   };

//   // };

//   const AddEmployee = (employee) => {
//     // e.preventDefault();
//     axios
//       .post(`${base_url}`, professional)
//       .then((response) => {
//         alert("Employee added successfully");
//       })
//       .catch((error) => {
//         alert("Error adding employee");
//       });
//     // axios
//     //   .post(`${base_url}/addEmp/`, employee)
//     //   .then((response) => {
//     //     alert("Employee added successfully");
//     //   })
//     //   .catch((error) => {
//     //     alert("Error adding employee");
//     //   });
//   };

//   useEffect(() => {
//     if (props.props.update) {
//       const professional = props.props.updateEmployee;

//       setEmployeeId(professional.employeeId);
//       setRole(professional.role);
//       setDesignation(professional.designation);
//       setDateOfJoining(professional.dateOfJoining);
//       setCompanyEmail(professional.companyEmail);
//       setReportingManager(professional.reportingManager);
//       setHrName(professional.hrName);
//       setLocation(professional.location);
//       setOfficeAddress(professional.officeAddress);
//     }
//   }, [props.props.update, props.props.updateEmployee]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const professional = {
//       employeeId,
//       role,
//       designation,
//       dateOfJoining,
//       companyEmail,
//       reportingManager,
//       hrName,
//       location,
//       officeAddress,
//     };

//     if (props.props.update) {
//       UpdateEmployee(professional);
//     } else {
//       AddEmployee(professional);
//     }
//   };

//   const title = () => {
//     if (props.props.update) {
//       return <h2 className="text-center">Update Employee</h2>;
//     } else {
//       return <h2 className="text-center">Add Employee</h2>;
//     }
//   };
//   return (
//     <div>
//       <br />
//       <br />
//       <div className="container">
//         <div className="row my-3">
//           <h3 className="accordion-header">{title()}</h3>

//           <div className="  col-12">
//             <div className=" col-12">
//               <form className="col-12">
//                 <div className="row">
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Employee ID :</label>
//                     <input
//                       type="number"
//                       placeholder="Enter Employee ID"
//                       name="empid"
//                       className="form-control"
//                       value={employeeId}
//                       onChange={(e) => setEmployeeId(e.target.value)}></input>
//                   </div>
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label">Name :</label>
//                     <input
//                       type="text"
//                       placeholder="Enter name"
//                       name="name"
//                       className="form-control"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}></input>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Age :</label>
//                     <input
//                       type="number"
//                       placeholder="Enter Age"
//                       name="age"
//                       className="form-control"
//                       value={age}
//                       onChange={(e) => setAge(e.target.value)}></input>
//                   </div>

//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Gender :</label>
//                     <br />
//                     <input
//                       className="form-check-input mx-2"
//                       type="radio"
//                       name="gender"
//                       value="Male"
//                       checked={gender === "M"}
//                       onChange={(e) => setGender("M")}
//                     />
//                     <label className="form-check-label " htmlFor="Male">
//                       Male
//                     </label>

//                     <input
//                       className="form-check-input mx-2"
//                       type="radio"
//                       name="gender"
//                       value="Female"
//                       checked={gender === "F"}
//                       onChange={(e) => setGender("F")}
//                     />
//                     <label className="form-check-label " htmlFor="Female">
//                       Female
//                     </label>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Phone :</label>
//                     <input
//                       type="tel"
//                       placeholder="Enter phone number"
//                       name="emailId"
//                       className="form-control"
//                       min={10}
//                       max={10}
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}></input>
//                   </div>
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Email :</label>
//                     <input
//                       type="email"
//                       placeholder="Enter email Id"
//                       name="emailId"
//                       className="form-control"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}></input>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Current Address :</label>
//                     <input
//                       type="text"
//                       placeholder="Enter current address"
//                       name="currentAddress"
//                       className="form-control"
//                       value={current_add}
//                       onChange={(e) => setCurrent_add(e.target.value)}></input>
//                   </div>
//                   <div className="form-group mb-2 col-6">
//                     <label className="form-label"> Permenant Address :</label>
//                     <input
//                       type="text"
//                       placeholder="Enter permenant address"
//                       name="permenant_address"
//                       className="form-control"
//                       value={permenant_add}
//                       onChange={(e) =>
//                         setPermenant_add(e.target.value)
//                       }></input>
//                   </div>
//                 </div>
//                 {/* <div className="row"> */}
//                 <button
//                   type="submit"
//                   className="btn btn-success mt-2"
//                   onClick={(e) => handleSubmit(e)}>
//                   Submit
//                 </button>
//                 {/* {props.props.update ? (
//                   <button
//                     className="btn btn-success"
//                     onClick={(e) => UpdateEmployee(employee)}>
//                     Submit{" "}
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-success"
//                     onClick={(e) => AddEmployee(employee)}>
//                     Submit{" "}
//                   </button>
//                 )} */}
//                 {/* <Link to="/employees" className="btn btn-danger">
//                   {" "}
//                   Cancel{" "}
//                 </Link> */}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddProfessionalDetails;
