package com.ems.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ems.model.LoginCredentials;

public interface LoginCredentialsRepository extends JpaRepository<LoginCredentials, Long> {
    Optional<LoginCredentials> findByUsername(String username);
}








//package com.ems.repository;
//
//public class LoginCredentialsRepository {
//
//}
