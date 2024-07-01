import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import axios from "axios";

function ViewEmployeeComp(props) {
  const [employee, setEmployee] = useState({});
  const [professional, setProfessional] = useState({});
  const [project, setProject] = useState({});
  const [financial, setFinancial] = useState({});
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    if (props.props.viewEmployeeId) {
      axios
        .get(
          `http://localhost:8080/api/v1/employees/${props.props.viewEmployeeId}`
        )
        .then((res) => {
          setEmployee(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert("Error while fetching employee to view");
        });
      axios
        .get(
          `http://localhost:8080/api/v1/professional-details/${props.props.viewEmployeeId}`
        )
        .then((res) => {
          setProfessional(res.data);
        })
        .catch((err) => {
          alert("Error while fetching professional details to view");
        });
      axios
        .get(
          `http://localhost:8080/api/v1/project-details/employee/${props.props.viewEmployeeId}`
        )
        .then((res) => {
          setProject(res.data[0]);
        })
        .catch((err) => {
          alert("Error while fetching project details to view");
        });
      axios
        .get(
          `http://localhost:8080/api/v1/financial-details/${props.props.viewEmployeeId}`
        )
        .then((res) => {
          setFinancial(res.data);
        })
        .catch((err) => {
          alert("Error while fetching financial details to view");
        });
    } else {
      alert("Error while fetching employee");
    }
  }, [props.props.viewEmployeeId]);

  const handleAccordionClick = (accordionName) => {
    setActiveAccordion(
      activeAccordion === accordionName ? null : accordionName
    );
  };

  // Function to render non-editable input fields
  const renderInputField = (label, value) => (
    <div className="col-md-6">
      <div className="mb-3">
        <label className="form-label">{label}:</label>
        <input type="text" className="form-control" value={value} readOnly />
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <Accordion activeKey={activeAccordion}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEmployee">
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleAccordionClick("employee")}>
              Employee Information
            </button>
          </h2>
          <Accordion.Collapse eventKey="employee">
            <div className="accordion-body">
              <div className="row">
                {renderInputField("Employee Id", employee.id)}
                {renderInputField("Name", employee.name)}
                {renderInputField("Email", employee.email)}
                {renderInputField("Phone", employee.phone)}
                {renderInputField("Age", employee.age)}
                {renderInputField("Gender", employee.gender)}
                {renderInputField("Current Address", employee.current_add)}
                {renderInputField("Permanent Address", employee.permanent_add)}
              </div>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingProfessional">
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleAccordionClick("professional")}>
              Professional Information
            </button>
          </h2>
          <Accordion.Collapse eventKey="professional">
            <div className="accordion-body">
              <div className="row">
                {renderInputField("Role", professional.role)}
                {renderInputField("Designation", professional.designation)}
                {renderInputField(
                  "Date of Joining",
                  professional.dateOfJoining
                )}
                {renderInputField("Company Email", professional.companyEmail)}
                {renderInputField(
                  "Reporting Manager",
                  professional.reportingManager
                )}
                {renderInputField("HR Name", professional.hrName)}
                {renderInputField("Location", professional.location)}
                {renderInputField("Office Address", professional.officeAddress)}
              </div>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingProject">
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleAccordionClick("project")}>
              Project Information
            </button>
          </h2>
          <Accordion.Collapse eventKey="project">
            <div className="accordion-body">
              <div className="row">
                {renderInputField("Project Id", project.projectId)}
                {renderInputField("Client Name", project.clientName)}
                {renderInputField("Project Name", project.projectName)}
                {renderInputField("Description", project.description)}
                {renderInputField("Start Date", project.startDate)}
                {renderInputField("End Date", project.endDate)}
              </div>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFinancial">
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleAccordionClick("financial")}>
              Financial Information
            </button>
          </h2>
          <Accordion.Collapse eventKey="financial">
            <div className="accordion-body">
              <div className="row">
                {renderInputField("Account Number", financial.accountNumber)}
                {renderInputField("Branch Name", financial.bankName)}
                {renderInputField("Branch", financial.branchName)}
                {renderInputField("IFSC Code", financial.ifscCode)}
                {renderInputField("Salary Details", financial.salaryDetails)}
              </div>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
}

export default ViewEmployeeComp;
