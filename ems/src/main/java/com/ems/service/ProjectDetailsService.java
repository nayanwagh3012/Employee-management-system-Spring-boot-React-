package com.ems.service;

import java.util.List;
import java.util.Optional;

import com.ems.model.ProjectDetails;

public interface ProjectDetailsService {

    ProjectDetails addProjectDetails(ProjectDetails projectDetails);

    String removeProjectDetails(Long id);

    Optional<ProjectDetails> findProjectDetailsById(Long id);

    List<ProjectDetails> getAllProjectDetails();

    String updateProjectDetails(Long id);
//    List<ProjectDetails> findByEmployeeId(Long employeeId);

}


//package com.ems.service;
//
//public class ProjectDetailsService {
//
//}
