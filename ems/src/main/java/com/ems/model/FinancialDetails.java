//package com.ems.model;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.ForeignKey;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "financial_details")
//public class FinancialDetails {
//
//    @Id
//    @Column(name = "employee_id")
//    private Long employeeId;
//
//    @OneToOne
//    @JoinColumn(name = "employee_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_financial_details_employee_id"))
//    private Employee employee;
//
//    @Column(name = "salary_details",  nullable = false)
//    private Double salaryDetails;
//
//    @Column(name = "ifsc_code", length = 20, nullable = false)
//    private String ifscCode;
//
//    @Column(name = "bank_name", length = 100, nullable = false)
//    private String bankName;
//
//    @Column(name = "account_number", length = 50, nullable = false)
//    private String accountNumber;
//
//    @Column(name = "branch_name", length = 100, nullable = false)
//    private String branchName;
//
//
//    // Constructors, getters, and setters
//    public FinancialDetails() {}
//
//    public FinancialDetails(Long employeeId, Double salaryDetails, String ifscCode, String bankName,
//                             String accountNumber, String branchName, Employee employee) {
//        this.employeeId = employeeId;
//        this.salaryDetails = salaryDetails;
//        this.ifscCode = ifscCode;
//        this.bankName = bankName;
//        this.accountNumber = accountNumber;
//        this.branchName = branchName;
//        this.employee = employee;
//    }
//
//    // Getters and Setters
//    public Long getEmployeeId() {
//        return employeeId;
//    }
//
//    public void setEmployeeId(Long employeeId) {
//        this.employeeId = employeeId;
//    }
//
//    public Double getSalaryDetails() {
//        return salaryDetails;
//    }
//
//    public void setSalaryDetails(Double salaryDetails) {
//        this.salaryDetails = salaryDetails;
//    }
//
//    public String getIfscCode() {
//        return ifscCode;
//    }
//
//    public void setIfscCode(String ifscCode) {
//        this.ifscCode = ifscCode;
//    }
//
//    public String getBankName() {
//        return bankName;
//    }
//
//    public void setBankName(String bankName) {
//        this.bankName = bankName;
//    }
//
//    public String getAccountNumber() {
//        return accountNumber;
//    }
//
//    public void setAccountNumber(String accountNumber) {
//        this.accountNumber = accountNumber;
//    }
//
//    public String getBranchName() {
//        return branchName;
//    }
//
//    public void setBranchName(String branchName) {
//        this.branchName = branchName;
//    }
//
//    public Employee getEmployee() {
//        return employee;
//    }
//
//    public void setEmployee(Employee employee) {
//        this.employee = employee;
//    }
//}

package com.ems.model;

import java.math.BigDecimal;

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
@Table(name = "financial_details")
public class FinancialDetails {

    @Id
    @Column(name = "employee_id")
    private Long employeeId;

    @OneToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_financial_details_employee_id"))
    private Employee employee;

    @Column(name = "salary_details", precision = 10, scale = 2)
    private BigDecimal salaryDetails;

    @Column(name = "ifsc_code", length = 20)
    private String ifscCode;

    @Column(name = "bank_name", length = 100)
    private String bankName;

    @Column(name = "account_number", length = 50)
    private String accountNumber;

    @Column(name = "branch_name", length = 100)
    private String branchName;

    // Constructors, getters, and setters
    public FinancialDetails() {}

    public FinancialDetails(Long employeeId, Employee employee, BigDecimal salaryDetails,
                            String ifscCode, String bankName, String accountNumber,
                            String branchName) {
        this.employeeId = employeeId;
        this.employee = employee;
        this.salaryDetails = salaryDetails;
        this.ifscCode = ifscCode;
        this.bankName = bankName;
        this.accountNumber = accountNumber;
        this.branchName = branchName;
    }

    // Getters and Setters
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

    public BigDecimal getSalaryDetails() {
        return salaryDetails;
    }

    public void setSalaryDetails(BigDecimal salaryDetails) {
        this.salaryDetails = salaryDetails;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }
}

