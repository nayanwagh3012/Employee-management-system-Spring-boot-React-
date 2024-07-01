package com.ems.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ems.exception.ResourceNotFoundException;
import com.ems.model.ProjectDetails;
import com.ems.repository.ProjectDetailsRepository;
import com.ems.service.ProjectDetailsService;

@CrossOrigin("*")
@RestController 
@RequestMapping("/api/v1/project-details")
public class ProjectDetailsController {

    @Autowired
    private ProjectDetailsRepository projectDetailsRepository;

    @Autowired
    private ProjectDetailsService projectDetailsService;

    @GetMapping
    public List<ProjectDetails> getAllProjectDetails() {
        return projectDetailsRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<ProjectDetails> addProjectDetails(@RequestBody ProjectDetails projectDetails) {
        ProjectDetails addedDetails = projectDetailsService.addProjectDetails(projectDetails);
        projectDetailsRepository.save(addedDetails);
        return new ResponseEntity<>(addedDetails, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProjectDetails> updateProjectDetails(@PathVariable long id, @RequestBody ProjectDetails projectDetails) {
        ProjectDetails existingDetails = projectDetailsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project details not found with id: " + id));

        existingDetails.setProjectName(projectDetails.getProjectName());
        existingDetails.setStartDate(projectDetails.getStartDate());
        existingDetails.setEndDate(projectDetails.getEndDate());
        existingDetails.setClientName(projectDetails.getClientName());
        existingDetails.setDescription(projectDetails.getDescription());
        existingDetails.setEmployee(projectDetails.getEmployee());

        projectDetailsRepository.save(existingDetails);

        return ResponseEntity.ok(existingDetails);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeProjectDetails(@PathVariable Long id) {
        projectDetailsService.removeProjectDetails(id);
        return new ResponseEntity<>("Removed successfully", HttpStatus.ACCEPTED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<ProjectDetails>> findProjectDetailsById(@PathVariable Long id) {
        Optional<ProjectDetails> details = projectDetailsService.findProjectDetailsById(id);
        return new ResponseEntity<>(details, HttpStatus.ACCEPTED);
    }
    
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<ProjectDetails>> findProjectDetailsByEmployeeId(@PathVariable Long employeeId) {
        List<ProjectDetails> details = projectDetailsRepository.findByEmployeeId(employeeId);
        return new ResponseEntity<>(details, HttpStatus.ACCEPTED);
    }


}


//package com.ems.controller;
//
//public class ProjectDetailsController {
//
//}
