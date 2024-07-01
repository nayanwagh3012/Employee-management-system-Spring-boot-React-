package com.ems.controller;

import com.ems.exception.ResourceNotFoundException;
import com.ems.model.Employee;
import com.ems.model.LoginCredentials;
import com.ems.repository.LoginCredentialsRepository;
import com.ems.service.LoginCredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/login-credentials")
public class LoginCredentialsController {

    @Autowired
    private LoginCredentialsRepository loginCredentialsRepository;

    @Autowired
    private LoginCredentialsService loginCredentialsService;

    @GetMapping
    public List<LoginCredentials> getAllLoginCredentials() {
        return loginCredentialsRepository.findAll();
    }

//    @PostMapping
//    public ResponseEntity<LoginCredentials> addLoginCredentials(@RequestBody LoginCredentials loginCredentials) {
//        LoginCredentials addedCredentials = loginCredentialsService.addLoginCredentials(loginCredentials);
//        loginCredentialsRepository.save(addedCredentials);
//        return new ResponseEntity<>(addedCredentials, HttpStatus.CREATED);
//    }
    
//    -----------------------
//    @PostMapping("")
//    public ResponseEntity<String> createLoginCredentials(@RequestBody LoginCredentials loginCredentials) {
//        LoginCredentials newLoginCredentials = new LoginCredentials();
//        newLoginCredentials.setEmployeeId(loginCredentials.getEmployeeId());
//        newLoginCredentials.setUsername(loginCredentials.getUsername());
//        newLoginCredentials.setPassword(loginCredentials.getPassword());
//        newLoginCredentials.setEmployee(loginCredentials.getEmployee());
//
//        loginCredentialsRepository.save(newLoginCredentials);
//
//        return ResponseEntity.ok("Login credentials created successfully");
//    }
    
    @PostMapping("")
    public ResponseEntity<String> createLoginCredentials(@RequestBody LoginCredentials loginCredentials) {
        // Debugging: Log received LoginCredentials object
        System.out.println("Received LoginCredentials: " + loginCredentials.getEmployeeId());

        // Ensure employeeId is provided
        Long employeeId = loginCredentials.getEmployeeId();
        if (employeeId == null) {
            throw new IllegalArgumentException("Employee ID must be provided.");
        }

        loginCredentialsService.addLoginCredentials(loginCredentials);
        return ResponseEntity.ok("Login credentials created successfully");
    }
//    --------------------------------

    @PutMapping("{id}")
    public ResponseEntity<LoginCredentials> updateLoginCredentials(@PathVariable Long id, @RequestBody LoginCredentials loginCredentials) {
        LoginCredentials existingCredentials = loginCredentialsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Login credentials not found with id: " + id));

        existingCredentials.setUsername(loginCredentials.getUsername());
        existingCredentials.setPassword(loginCredentials.getPassword());
        existingCredentials.setEmployee(loginCredentials.getEmployee());

        loginCredentialsRepository.save(existingCredentials);

        return ResponseEntity.ok(existingCredentials);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeLoginCredentials(@PathVariable Long id) {
        loginCredentialsService.removeLoginCredentials(id);
        return new ResponseEntity<>("Removed successfully", HttpStatus.ACCEPTED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<LoginCredentials>> findLoginCredentialsById(@PathVariable Long id) {
        Optional<LoginCredentials> credentials = loginCredentialsService.findLoginCredentialsById(id);
        return new ResponseEntity<>(credentials, HttpStatus.ACCEPTED);
    }

//    @PostMapping("/authenticate")
//    public ResponseEntity<Long> authenticateUser(@RequestParam String username, @RequestParam String password) {
//        Long employeeId = loginCredentialsService.authenticateUser(username, password);
//        return ResponseEntity.ok(employeeId);
//    }
    
    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, Object>> authenticateUser(@RequestBody Map<String, String> authRequest) {
        String username = authRequest.get("username");
        String password = authRequest.get("password");

        Long loginCredentialsId = loginCredentialsService.authenticateUser(username, password);
        if (loginCredentialsId != null) {
            // Authentication successful
            // Return LoginCredentials object, which includes Employee information
            return ResponseEntity.ok(Collections.singletonMap("loginCredentialsId", loginCredentialsId));
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "Invalid username or password"));
        }
    }
}
