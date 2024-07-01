package com.ems.service;

import java.util.List;
import java.util.Optional;

import com.ems.model.Employee;
public interface EmployeeService {
	
	
	public Employee addEmployee(Employee employee);
	
	public String  removeEmployee(Long id);
	
	public Optional<Employee> findEmpById(Long id);
	
	public List<Employee> getAllEmployee();
	
	public String updateEmployee(Long id);

//	public void removeEmployeeAndRelatedRecords(Long id);

}