package com.ems.serviceimpl;

import com.ems.model.LoginCredentials;
import com.ems.repository.LoginCredentialsRepository;
import com.ems.service.LoginCredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginCredentialsServiceImpl implements LoginCredentialsService {

    @Autowired
    private LoginCredentialsRepository loginCredentialsRepository;

//    @Override
//    public LoginCredentials addLoginCredentials(LoginCredentials loginCredentials) {
//        return loginCredentialsRepository.save(loginCredentials);
//    }
    
//    ----------------------------------
    @Override
    public LoginCredentials addLoginCredentials(LoginCredentials loginCredentials) {
        // Ensure the employeeId is set before saving
        Long employeeId = loginCredentials.getEmployeeId();
        if (employeeId == null) {
            throw new IllegalArgumentException("Employee ID must be provided.");
        }
        return loginCredentialsRepository.save(loginCredentials);
    }
//    --------------------------------------------

    @Override
    public String removeLoginCredentials(Long id) {
        loginCredentialsRepository.deleteById(id);
        return "Deleted successfully";
    }

    @Override
    public Optional<LoginCredentials> findLoginCredentialsById(Long id) {
        return loginCredentialsRepository.findById(id);
    }

    @Override
    public Long authenticateUser(String username, String password) {
        LoginCredentials credentials = loginCredentialsRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("Invalid username"));

        if (credentials.getPassword().equals(password)) {
            return credentials.getEmployeeId();
        } else {
            throw new IllegalArgumentException("Invalid password");
        }
    }
//    @Override
//    public LoginCredentials authenticateUser(String username, String password) {
//        LoginCredentials credentials = loginCredentialsRepository.findByUsername(username)
//                .orElseThrow(() -> new IllegalArgumentException("Invalid username"));
//
//        if (credentials.getPassword().equals(password)) {
//            return credentials;
//        } else {
//            throw new IllegalArgumentException("Invalid password");
//        }
//    }

}
