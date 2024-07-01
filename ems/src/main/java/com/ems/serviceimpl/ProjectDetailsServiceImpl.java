package com.ems.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.model.ProjectDetails;
import com.ems.repository.ProjectDetailsRepository;
import com.ems.service.ProjectDetailsService;

@Service
public class ProjectDetailsServiceImpl implements ProjectDetailsService {

    @Autowired
    private ProjectDetailsRepository projectDetailsRepository;

    @Override
    public ProjectDetails addProjectDetails(ProjectDetails projectDetails) {
        return projectDetailsRepository.save(projectDetails);
    }

    @Override
    public String removeProjectDetails(Long id) {
        projectDetailsRepository.deleteById(id);
        return "Deleted successfully";
    }
    
    
//    @Override
//    public String removeProjectDetails(Long id) {
//        Optional<ProjectDetails> projectDetailsOptional = projectDetailsRepository.findById(id);
//        if (projectDetailsOptional.isPresent()) {
//            ProjectDetails projectDetails = projectDetailsOptional.get();
//            // Deleting projectDetails will cascade delete associated employee
//            projectDetailsRepository.delete(projectDetails);
//            return "Deleted successfully";
//        } else {
//            return "Project details not found";
//        }
//    }


    @Override
    public Optional<ProjectDetails> findProjectDetailsById(Long id) {
        return projectDetailsRepository.findById(id);
    }

    @Override
    public List<ProjectDetails> getAllProjectDetails() {
        return projectDetailsRepository.findAll();
    }

    @Override
    public String updateProjectDetails(Long id) {
        Optional<ProjectDetails> projectDetails = projectDetailsRepository.findById(id);
        if (projectDetails.isPresent()) {
            ProjectDetails existingDetails = projectDetails.get();
            // Perform update logic here
            projectDetailsRepository.save(existingDetails);
            return "Updated successfully";
        } else {
            return "Project details not found";
        }
    }

//	@Override
//	public List<ProjectDetails> findByEmployeeId(Long employeeId) {
//		// TODO Auto-generated method stub
//		return projectDetailsRepository.findByEmployeeId(employeeId);
//	}
}


//package com.ems.serviceimpl;
//
//public class ProjectDetailsServiceImpl {
//
//}
