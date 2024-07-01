//package com.ems.service;
//
//import java.util.List;
//import java.util.Optional;
//import com.ems.model.FinancialDetails;
//
//public interface FinancialDetailsService {
//
//    FinancialDetails addFinancialDetails(FinancialDetails financialDetails);
//
//    String removeFinancialDetails(Long id);
//
//    Optional<FinancialDetails> findFinancialDetailsById(Long id);
//
//    List<FinancialDetails> getAllFinancialDetails();
//
//    String updateFinancialDetails(Long id);
//}
//
//
////package com.ems.service;
////
////public class FinancialDetailsService {
////
////}


package com.ems.service;

import java.util.List;
import java.util.Optional;

import com.ems.model.FinancialDetails;

public interface FinancialDetailsService {

    FinancialDetails addFinancialDetails(FinancialDetails financialDetails);

    String removeFinancialDetails(Long id);

    Optional<FinancialDetails> findFinancialDetailsById(Long id);

    List<FinancialDetails> getAllFinancialDetails();

    FinancialDetails updateFinancialDetails(Long id, FinancialDetails financialDetails);
}
