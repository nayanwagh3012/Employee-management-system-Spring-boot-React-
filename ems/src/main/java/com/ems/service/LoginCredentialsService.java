package com.ems.service;

import com.ems.model.LoginCredentials;
import java.util.Optional;

public interface LoginCredentialsService {

    LoginCredentials addLoginCredentials(LoginCredentials loginCredentials);

    String removeLoginCredentials(Long id);

    Optional<LoginCredentials> findLoginCredentialsById(Long id);

    Long authenticateUser(String username, String password);
}
