package com.ems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ems.model.ProjectDetails;

public interface ProjectDetailsRepository extends JpaRepository<ProjectDetails, Long> {

	List<ProjectDetails> findByEmployeeId(Long employeeId);

}
