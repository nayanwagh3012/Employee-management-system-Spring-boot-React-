package com.ems.controller;

import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ems.exception.ResourceNotFoundException;

import com.ems.model.Employee;
import com.ems.repository.EmployeeRepository;
import com.ems.service.EmployeeService;

import jakarta.transaction.Transactional;

@CrossOrigin("*")
@RestController 
@RequestMapping("/api/v1/employees")
public class EmployeeController {

	private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
	
	
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}
	
	@Autowired
	private EmployeeService employeeService;

//	@PostMapping("/addEmp/")
//	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
//	    Employee emp = employeeService.addEmployee(employee);
//	    return new ResponseEntity<Employee>(emp, HttpStatus.CREATED);
//	}

	@PostMapping()
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
	    Employee emp = employeeService.addEmployee(employee);
	    employeeRepository.save(emp);
	    return new ResponseEntity<Employee>(emp, HttpStatus.CREATED);
	}
	
	
//	@PutMapping("{id}")
//	@PutMapping("/update/{id}")
//    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails) {
//        Employee updateEmployee = employeeRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFounfException("Employee not exist with id: " + id));
//        
//        updateEmployee.setName(employeeDetails.getName());
//        updateEmployee.setAge(employeeDetails.getAge());
//        updateEmployee.setGender(employeeDetails.getGender());
//        updateEmployee.setPhone(employeeDetails.getPhone());
//		updateEmployee.setEmail(employeeDetails.getEmail());
//		updateEmployee.setCurrent_add(employeeDetails.getCurrent_add());
//		updateEmployee.setPermenant_add(employeeDetails.getPermenant_add());
//
//        employeeRepository.save(updateEmployee);
//
//        return ResponseEntity.ok(updateEmployee);
//    }
	
	@PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
        
        updateEmployee.setName(employeeDetails.getName());
        updateEmployee.setAge(employeeDetails.getAge());
        updateEmployee.setGender(employeeDetails.getGender());
        updateEmployee.setPhone(employeeDetails.getPhone());
		updateEmployee.setEmail(employeeDetails.getEmail());
		updateEmployee.setCurrent_add(employeeDetails.getCurrent_add());
		updateEmployee.setPermenant_add(employeeDetails.getPermenant_add());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

	
//	@DeleteMapping("/removeEmp/{id}")
	@DeleteMapping("{id}")
	public ResponseEntity<String> removeEmployee(@PathVariable Long id){
		
		
		employeeService.removeEmployee(id);
		return new ResponseEntity<String>("Remove successfully",HttpStatus.ACCEPTED);
	}
	
	
//	@DeleteMapping("{id}")
//	public ResponseEntity<String> removeEmployee(@PathVariable Long id){
//	    // Delete matching records from child tables first
//	    employeeService.removeEmployeeAndRelatedRecords(id);
//	    return new ResponseEntity<>("Employee and related records removed successfully", HttpStatus.ACCEPTED);
//	}
//
	
//	@Transactional
//	public void removeEmployeeAndRelatedRecords(Long employeeId) {
//	    // Delete from child tables first to avoid foreign key constraint violations
//	    deleteFromProfessionalDetails(employeeId);
//	    deleteFromFinancialDetails(employeeId);
//	    // Add more delete methods for other related tables if needed
//
//	    // Finally, delete the employee record
//	    deleteEmployee(employeeId);
//	}
//
//	private void deleteFromProfessionalDetails(Long employeeId) {
//	    String sql = "DELETE FROM professional_details WHERE employee_id = ?";
//	    jdbcTemplate.update(sql, employeeId);
//	}
//
//	private void deleteFromFinancialDetails(Long employeeId) {
//	    String sql = "DELETE FROM financial_details WHERE employee_id = ?";
//	    jdbcTemplate.update(sql, employeeId);
//	}
//
//	// Add more delete methods for other related tables if needed
//
//	private void deleteEmployee(Long employeeId) {
//	    String sql = "DELETE FROM employees WHERE id = ?";
//	    jdbcTemplate.update(sql, employeeId);
//	}

	
	
	
//	@GetMapping("/findEmp/{id}")
//	public ResponseEntity<Optional<Employee>> findEmployeeById(@PathVariable Long id){
//		
//		Optional<Employee> emps=employeeService.findEmpById(id);
//		
//		return new ResponseEntity<Optional<Employee>>(emps,HttpStatus.ACCEPTED);
//		
//	}
	
	@GetMapping("{id}")
	public ResponseEntity<Optional<Employee>> findEmployeeById(@PathVariable Long id){
		
		Optional<Employee> emps=employeeService.findEmpById(id);
		
		return new ResponseEntity<Optional<Employee>>(emps,HttpStatus.ACCEPTED);
		
	}
	
}
