package com.ems.service;

import java.util.List;
import java.util.Optional;
import com.ems.model.ProfessionalDetails;

public interface ProfessionalDetailsService {

    ProfessionalDetails addProfessionalDetails(ProfessionalDetails professionalDetails);

    String removeProfessionalDetails(Long id);

    Optional<ProfessionalDetails> findProfessionalDetailsById(Long id);

    List<ProfessionalDetails> getAllProfessionalDetails();

    String updateProfessionalDetails(Long id);
}



//package com.ems.service;
//
//public class ProfessionalDetailsService {
//
//}
