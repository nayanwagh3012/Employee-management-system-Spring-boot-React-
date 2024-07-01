//package com.ems.controller;
//
//import com.ems.exception.ResourceNotFoundException;
//import com.ems.model.FinancialDetails;
//import com.ems.repository.FinancialDetailsRepository;
//import com.ems.service.FinancialDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/api/v1/financial-details")
//public class FinancialDetailsController {
//
//    @Autowired
//    private FinancialDetailsRepository financialDetailsRepository;
//
//    @Autowired
//    private FinancialDetailsService financialDetailsService;
//
//    @GetMapping
//    public List<FinancialDetails> getAllFinancialDetails() {
//        return financialDetailsRepository.findAll();
//    }
//
//    @PostMapping()
//    public ResponseEntity<FinancialDetails> addFinancialDetails(@RequestBody FinancialDetails financialDetails) {
//        FinancialDetails addedDetails = financialDetailsService.addFinancialDetails(financialDetails);
//        financialDetailsRepository.save(addedDetails);
//        return new ResponseEntity<>(addedDetails, HttpStatus.CREATED);
//    }
//
//    @PutMapping("{id}")
//    public ResponseEntity<FinancialDetails> updateFinancialDetails(@PathVariable Long id, @RequestBody FinancialDetails financialDetails) {
//        FinancialDetails existingDetails = financialDetailsRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Financial details not found with id: " + id));
//
//        existingDetails.setSalaryDetails(financialDetails.getSalaryDetails());
//        existingDetails.setIfscCode(financialDetails.getIfscCode());
//        existingDetails.setBankName(financialDetails.getBankName());
//        existingDetails.setAccountNumber(financialDetails.getAccountNumber());
//        existingDetails.setBranchName(financialDetails.getBranchName());
//        existingDetails.setEmployee(financialDetails.getEmployee());
//
//        financialDetailsRepository.save(existingDetails);
//
//        return ResponseEntity.ok(existingDetails);
//    }
//
//    @DeleteMapping("{id}")
//    public ResponseEntity<String> removeFinancialDetails(@PathVariable Long id) {
//        financialDetailsService.removeFinancialDetails(id);
//        return new ResponseEntity<>("Removed successfully", HttpStatus.ACCEPTED);
//    }
//
//    @GetMapping("{id}")
//    public ResponseEntity<Optional<FinancialDetails>> findFinancialDetailsById(@PathVariable Long id) {
//        Optional<FinancialDetails> details = financialDetailsService.findFinancialDetailsById(id);
//        return new ResponseEntity<>(details, HttpStatus.ACCEPTED);
//    }
//}
//
//
////package com.ems.controller;
////
////public class FinancialDetailsController {
////
////}


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
import com.ems.model.FinancialDetails;
import com.ems.repository.FinancialDetailsRepository;
import com.ems.service.FinancialDetailsService;

@CrossOrigin("*")
@RestController 
@RequestMapping("/api/v1/financial-details")
public class FinancialDetailsController {

    @Autowired
    private FinancialDetailsRepository financialDetailsRepository;

    @Autowired
    private FinancialDetailsService financialDetailsService;

    @GetMapping
    public List<FinancialDetails> getAllFinancialDetails() {
        return financialDetailsRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity<FinancialDetails> addFinancialDetails(@RequestBody FinancialDetails financialDetails) {
        FinancialDetails addedDetails = financialDetailsService.addFinancialDetails(financialDetails);
        financialDetailsRepository.save(addedDetails);
        return new ResponseEntity<>(addedDetails, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<FinancialDetails> updateFinancialDetails(@PathVariable long id, @RequestBody FinancialDetails financialDetails) {
        FinancialDetails existingDetails = financialDetailsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Financial details not found with id: " + id));

        existingDetails.setSalaryDetails(financialDetails.getSalaryDetails());
        existingDetails.setIfscCode(financialDetails.getIfscCode());
        existingDetails.setBankName(financialDetails.getBankName());
        existingDetails.setAccountNumber(financialDetails.getAccountNumber());
        existingDetails.setBranchName(financialDetails.getBranchName());

        financialDetailsRepository.save(existingDetails);

        return ResponseEntity.ok(existingDetails);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> removeFinancialDetails(@PathVariable Long id) {
        financialDetailsService.removeFinancialDetails(id);
        return new ResponseEntity<>("Removed successfully", HttpStatus.ACCEPTED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<FinancialDetails>> findFinancialDetailsById(@PathVariable Long id) {
        Optional<FinancialDetails> details = financialDetailsService.findFinancialDetailsById(id);
        return new ResponseEntity<>(details, HttpStatus.ACCEPTED);
    }
}
