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

@Entity
@Table(name = "login_credentials")
public class LoginCredentials {

//	----------------------------
//	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Long id;
//	---------------------------
    @Id
    @Column(name = "employee_id")
    private Long employeeId;

    @Column(name = "username", length = 100, unique = true, nullable = false)
    private String username;

    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @OneToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_login_credentials_employee_id"))
    private Employee employee;

    // Constructors, getters, and setters
    public LoginCredentials() {}

    public LoginCredentials(Long employeeId, String username, String password, Employee employee) {
        this.employeeId = employeeId;
        this.username = username;
        this.password = password;
        this.employee = employee;
    }

    // Getters and Setters
    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
