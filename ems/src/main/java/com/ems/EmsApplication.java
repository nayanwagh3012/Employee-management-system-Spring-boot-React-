package com.ems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ems.model.Employee;
import com.ems.repository.EmployeeRepository;

@SpringBootApplication
public class EmsApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(EmsApplication.class, args);
    }

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
//        Employee employee = new Employee();
//        employee.setId(12025);
//		employee.setName("Ram Patil");
//		employee.setAge(25);
//		employee.setGender('M');
//		employee.setPhone("9080706050");
//		employee.setEmail("ram@gmail.com");
//		employee.setCurrent_add("Pune, MH, India");
//		employee.setPermenant_add("Pune, MH, India");
//		employeeRepository.save(employee);
		
//		Employee employee1 = new Employee();
//        employee1.setId(12026);
//		employee1.setName("Seema Patil");
//		employee1.setAge(24);
//		employee1.setGender('F');
//		employee1.setPhone("9080778899");
//		employee1.setEmail("seema@gmail.com");
//		employee1.setCurrent_add("Nashik, MH, India"); 
//		employee1.setPermenant_add("Nashik, MH, India");
//		employeeRepository.save(employee1);
	
    }
}
