//package com.ems.serviceimpl;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ems.model.FinancialDetails;
//import com.ems.repository.FinancialDetailsRepository;
//import com.ems.service.FinancialDetailsService;
//
//@Service
//public class FinancialDetailsServiceImpl implements FinancialDetailsService {
//
//    @Autowired
//    private FinancialDetailsRepository financialDetailsRepository;
//
//    @Override
//    public FinancialDetails addFinancialDetails(FinancialDetails financialDetails) {
//    	Long employeeId = financialDetails.getEmployeeId();
//        return financialDetailsRepository.save(financialDetails);
//    }
//
//    @Override
//    public String removeFinancialDetails(Long id) {
//        financialDetailsRepository.deleteById(id);
//        return "Deleted successfully";
//    }
//
//    @Override
//    public Optional<FinancialDetails> findFinancialDetailsById(Long id) {
//        return financialDetailsRepository.findById(id);
//    }
//
//    @Override
//    public List<FinancialDetails> getAllFinancialDetails() {
//        return financialDetailsRepository.findAll();
//    }
//
//    @Override
//    public String updateFinancialDetails(Long id) {
//        Optional<FinancialDetails> financialDetails = financialDetailsRepository.findById(id);
//        if (financialDetails.isPresent()) {
//            FinancialDetails existingDetails = financialDetails.get();
//            // Perform update logic here
//            
//            financialDetailsRepository.save(existingDetails);
//            return "Updated successfully";
//        } else {
//            return "Financial details not found";
//        }
//    }
//    
////    @Override
////    public String updateFinancialDetails(Long id, FinancialDetails updatedFinancialDetails) {
////        Optional<FinancialDetails> financialDetailsOptional = financialDetailsRepository.findById(id);
////        if (financialDetailsOptional.isPresent()) {
////            FinancialDetails existingDetails = financialDetailsOptional.get();
////            // Update the existing financial details with the new values
////            existingDetails.setSalaryDetails(updatedFinancialDetails.getSalaryDetails());
////            existingDetails.setIfscCode(updatedFinancialDetails.getIfscCode());
////            existingDetails.setBankName(updatedFinancialDetails.getBankName());
////            existingDetails.setAccountNumber(updatedFinancialDetails.getAccountNumber());
////            existingDetails.setBranchName(updatedFinancialDetails.getBranchName());
////            existingDetails.setEmployee(updatedFinancialDetails.getEmployee());
////            // Save the updated details
////            financialDetailsRepository.save(existingDetails);
////            return "Financial details updated successfully";
////        } else {
////            return "Financial details not found";
////        }
////    }
//
//}
//
//
//
////package com.ems.serviceimpl;
////
////public class FinancialDetailsServiceImpl {
////
////}



package com.ems.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.exception.ResourceNotFoundException;
import com.ems.model.FinancialDetails;
import com.ems.repository.FinancialDetailsRepository;
import com.ems.service.FinancialDetailsService;

@Service
public class FinancialDetailsServiceImpl implements FinancialDetailsService {

    @Autowired
    private FinancialDetailsRepository financialDetailsRepository;

    @Override
    public FinancialDetails addFinancialDetails(FinancialDetails financialDetails) {
        return financialDetailsRepository.save(financialDetails);
    }

    @Override
    public String removeFinancialDetails(Long id) {
        financialDetailsRepository.deleteById(id);
        return "Deleted successfully";
    }

    @Override
    public Optional<FinancialDetails> findFinancialDetailsById(Long id) {
        return financialDetailsRepository.findById(id);
    }

    @Override
    public List<FinancialDetails> getAllFinancialDetails() {
        return financialDetailsRepository.findAll();
    }

    @Override
    public FinancialDetails updateFinancialDetails(Long id, FinancialDetails financialDetails) {
        FinancialDetails existingDetails = financialDetailsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Financial details not found with id: " + id));

        existingDetails.setSalaryDetails(financialDetails.getSalaryDetails());
        existingDetails.setIfscCode(financialDetails.getIfscCode());
        existingDetails.setBankName(financialDetails.getBankName());
        existingDetails.setAccountNumber(financialDetails.getAccountNumber());
        existingDetails.setBranchName(financialDetails.getBranchName());

        return financialDetailsRepository.save(existingDetails);
    }
}
