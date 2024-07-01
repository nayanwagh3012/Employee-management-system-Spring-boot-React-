package com.ems.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.ems.model.Employee;
import com.ems.model.LoginCredentials;
import com.ems.repository.EmployeeRepository;
import com.ems.service.EmployeeService;
//import com.ems.service.LoginService;
@Service
public class EmployeeServiceImpl  implements EmployeeService {
	
//	private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
	
	@Autowired
	private EmployeeRepository employeeRepo;

	@Override
    public Employee addEmployee(Employee employee) {
        Employee emp = employeeRepo.save(employee);
        return emp;
    }
//------------------------------login ----------------------
	/* @Autowired
	    private LoginService loginService;

	    @Override
	    public Employee addEmployee(Employee employee) {
	        // Save the employee
	        Employee addedEmployee = employeeRepo.save(employee);
	        
	        // Create login credentials for the employee
	        LoginCredentials loginCredentials = createLoginCredentials(addedEmployee);
	        loginService.addLoginCredentials(loginCredentials);
	        
	        return addedEmployee;
	    }

	    // Method to create login credentials based on employee details
	    private LoginCredentials createLoginCredentials(Employee employee) {
	        String username = employee.getEmail(); // Assuming email is used as username
	        // Generate password as described in your requirement
	        String password = generatePassword(employee.getName(), employee.getPhone());
	        return new LoginCredentials(employee.getId(), employee);
	    }

	    // Method to generate password
	    private String generatePassword(String name, String phone) {
	        String namePrefix = name.substring(0, Math.min(name.length(), 4));
	        String phonePrefix = phone.substring(0, Math.min(phone.length(), 4));
	        return namePrefix + "@" + phonePrefix;
	    }
	*/
//	------------------------------login end -----------------
	@Override
	public String removeEmployee(Long id) {
		
		employeeRepo.deleteById(id);
		return "Delete Data Sucessfully";
	}

	@Override
	public Optional<Employee> findEmpById(Long id) {
	    Optional<Employee> emp = employeeRepo.findById(id);
//	    return emp;
		if(emp.isPresent()) {
			return emp;
		}else {
			return null;
		}
		
	}

	@Override
	public List<Employee> getAllEmployee() {
		
		List<Employee> empList=employeeRepo.findAll();
		return  empList;
	}

	@Override
	public String updateEmployee(Long id) {
		Optional<Employee> emp =employeeRepo.findById(id);
		
		if(emp.isPresent()) {
			Employee emps= new Employee();
			employeeRepo.save(emps);
			return "updated successfully";
			
		}else {
			return "Employee not found";
		}
			
	}
	
	// Method to remove employee and related records from child tables
//    @Override
//    public void removeEmployeeAndRelatedRecords(Long employeeId) {
//        // Implement logic to delete related records from child tables
//        // For example:
//         deleteFromProfessionalDetails(employeeId);
//         deleteFromFinancialDetails(employeeId);
//        // Add more delete methods for other related tables if needed
//    }
//
//    // Example method to delete records from a child table
//    private void deleteFromProfessionalDetails(Long employeeId) {
//        // Example implementation to delete records from a child table
//        // You need to implement the actual logic based on your application's requirements
//         String sql = "DELETE FROM professional_details WHERE employee_id = ?";
//         jdbcTemplate.update(sql, employeeId);
//    }
//
//    // Example method to delete records from another child table
//    private void deleteFromFinancialDetails(Long employeeId) {
//        // Example implementation to delete records from another child table
//        // You need to implement the actual logic based on your application's requirements
//        String sql = "DELETE FROM financial_details WHERE employee_id = ?";
//         jdbcTemplate.update(sql, employeeId);
//    }

}