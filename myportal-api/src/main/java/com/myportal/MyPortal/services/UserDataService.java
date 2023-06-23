package com.myportal.MyPortal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myportal.MyPortal.dto.UserDataDTO;
import com.myportal.MyPortal.entities.UserData;
import com.myportal.MyPortal.repositories.UserDataRepository;

@Service
public class UserDataService {
	
	@Autowired
	private UserDataRepository userDataRepository;

	public List<UserDataDTO> findAll(){
		List<UserData> result = userDataRepository.findAll();
		List<UserDataDTO> dto = result.stream().map(x -> new UserDataDTO(x)).toList(); 
		return dto;
	}
}
