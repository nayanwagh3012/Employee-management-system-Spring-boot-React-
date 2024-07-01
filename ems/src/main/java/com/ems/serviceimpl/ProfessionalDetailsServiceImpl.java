package com.ems.serviceimpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ems.model.ProfessionalDetails;
import com.ems.repository.ProfessionalDetailsRepository;
import com.ems.service.ProfessionalDetailsService;

@Service
public class ProfessionalDetailsServiceImpl implements ProfessionalDetailsService {

    @Autowired
    private ProfessionalDetailsRepository professionalDetailsRepository;

    @Override
    public ProfessionalDetails addProfessionalDetails(ProfessionalDetails professionalDetails) {
        return professionalDetailsRepository.save(professionalDetails);
    }

    @Override
    public String removeProfessionalDetails(Long id) {
        professionalDetailsRepository.deleteById(id);
        return "Deleted successfully";
    }

    @Override
    public Optional<ProfessionalDetails> findProfessionalDetailsById(Long id) {
        return professionalDetailsRepository.findById(id);
    }

    @Override
    public List<ProfessionalDetails> getAllProfessionalDetails() {
        return professionalDetailsRepository.findAll();
    }

    @Override
    public String updateProfessionalDetails(Long id) {
        Optional<ProfessionalDetails> professionalDetails = professionalDetailsRepository.findById(id);
        if (professionalDetails.isPresent()) {
            ProfessionalDetails existingDetails = professionalDetails.get();
            // Perform update logic here
            professionalDetailsRepository.save(existingDetails);
            return "Updated successfully";
        } else {
            return "Professional details not found";
        }
    }
}


//package com.ems.serviceimpl;
//
//public class ProfessionalDetailsServiceImpl {
//
//}
