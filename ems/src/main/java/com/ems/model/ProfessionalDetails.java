package com.ems.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "professional_details")
public class ProfessionalDetails {

//	@Id
//    @OneToOne
//    @JoinColumn(name = "employee_id", referencedColumnName = "id")
//    private Employee employee;

	@Id
    @Column(name = "employee_id")
    private Long employeeId;

    @OneToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_professional_details_employee_id"))
    private Employee employee;

    
    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "designation", nullable = false)
    private String designation;

//    @Column(name = "date_of_joining", nullable = false)
//    private Date dateOfJoining;
    @Column(name = "date_of_joining", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dateOfJoining;


    @Column(name = "company_email", nullable = false, unique = true)
    private String companyEmail;

    @Column(name = "reporting_manager", nullable = false)
    private String reportingManager;

    @Column(name = "hr_name", nullable = false)
    private String hrName;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "office_address", nullable = false)
    private String officeAddress;

    // Constructors, getters, and setters
    public ProfessionalDetails() {}

    public ProfessionalDetails(Employee employee, String role, String designation, Date dateOfJoining,
                                String companyEmail, String reportingManager, String hrName, String location,
                                String officeAddress) {
        this.employee = employee;
        this.role = role;
        this.designation = designation;
        this.dateOfJoining = dateOfJoining;
        this.companyEmail = companyEmail;
        this.reportingManager = reportingManager;
        this.hrName = hrName;
        this.location = location;
        this.officeAddress = officeAddress;
    }

//     Getters and Setters
    public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

    public Employee getEmployee() {
        return employee;
    }

	public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(Date dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public String getCompanyEmail() {
        return companyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        this.companyEmail = companyEmail;
    }

    public String getReportingManager() {
        return reportingManager;
    }

    public void setReportingManager(String reportingManager) {
        this.reportingManager = reportingManager;
    }

    public String getHrName() {
        return hrName;
    }

    public void setHrName(String hrName) {
        this.hrName = hrName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getOfficeAddress() {
        return officeAddress;
    }

    public void setOfficeAddress(String officeAddress) {
        this.officeAddress = officeAddress;
    }
}
