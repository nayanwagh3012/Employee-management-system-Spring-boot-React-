
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
import org.springframework.web.bind.annotation.RestController;
import com.ems.exception.ResourceNotFoundException;
import com.ems.model.ProfessionalDetails;
import com.ems.repository.ProfessionalDetailsRepository;
import com.ems.service.ProfessionalDetailsService;

@CrossOrigin("*")
@RestController 
@RequestMapping("/api/v1/professional-details")
public class ProfessionalDetailsController {

    @Autowired
    private ProfessionalDetailsRepository professionalDetailsRepository;

    @Autowired
    private ProfessionalDetailsService professionalDetailsService;

    @GetMapping
    public List<ProfessionalDetails> getAllProfessionalDetails() {
        return professionalDetailsRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<ProfessionalDetails> addProfessionalDetails(@RequestBody ProfessionalDetails professionalDetails) {
        ProfessionalDetails addedDetails = professionalDetailsService.addProfessionalDetails(professionalDetails);
        professionalDetailsRepository.save(addedDetails);
        return new ResponseEntity<>(addedDetails, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProfessionalDetails> updateProfessionalDetails(@PathVariable long id, @RequestBody ProfessionalDetails professionalDetails) {
        ProfessionalDetails existingDetails = professionalDetailsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Professional details not found with id: " + id));

        existingDetails.setRole(professionalDetails.getRole());
        existingDetails.setDesignation(professionalDetails.getDesignation());
        existingDetails.setDateOfJoining(professionalDetails.getDateOfJoining());
        existingDetails.setCompanyEmail(professionalDetails.getCompanyEmail());
        existingDetails.setReportingManager(professionalDetails.getReportingManager());
        existingDetails.setHrName(professionalDetails.getHrName());
        existingDetails.setLocation(professionalDetails.getLocation());
        existingDetails.setOfficeAddress(professionalDetails.getOfficeAddress());

        professionalDetailsRepository.save(existingDetails);

        return ResponseEntity.ok(existingDetails);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeProfessionalDetails(@PathVariable Long id) {
        professionalDetailsService.removeProfessionalDetails(id);
        return new ResponseEntity<>("Removed successfully", HttpStatus.ACCEPTED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<ProfessionalDetails>> findProfessionalDetailsById(@PathVariable Long id) {
        Optional<ProfessionalDetails> details = professionalDetailsService.findProfessionalDetailsById(id);
        return new ResponseEntity<>(details, HttpStatus.ACCEPTED);
    }
}

//package com.ems.controller;
//
//public class ProfessionalDetailsController {
//
//}
