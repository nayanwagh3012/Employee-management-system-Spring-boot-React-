package com.ems.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "project_details")
public class ProjectDetails {

//  @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Id
    @Column(name = "project_id")
    private Long projectId;

    @Column(name = "proj_name", nullable = false)
    private String projectName;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date", nullable = false)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "client_name", nullable = false)
    private String clientName;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

//    @Column(name = "employee_id")
//    private Long employeeId;
    
//    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_project_details_employee_id"))
    private Employee employee;

    // Constructors, getters, and setters
    public ProjectDetails() {}

//    public ProjectDetails( String projectName, Date startDate, Date endDate, String clientName, String description, Employee employee) {
////        this.projectId = projectId;
//    	this.projectName = projectName;
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.clientName = clientName;
//        this.description = description;
//        this.employee = employee;
//    }

    public ProjectDetails(Long projectId, String projectName, Date startDate, Date endDate, String clientName,
			String description, Employee employee) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.clientName = clientName;
		this.description = description;
		this.employee = employee;
	}

//	public Long getEmployeeId() {
//		return employeeId;
//	}
//
//	public void setEmployeeId(Long employeeId) {
//		this.employeeId = employeeId;
//	}

	// Getters and Setters
    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}


//package com.ems.model;
//
//public class ProjectDetails {
//
//}
