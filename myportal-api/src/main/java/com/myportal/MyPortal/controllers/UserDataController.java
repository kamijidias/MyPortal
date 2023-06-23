package com.myportal.MyPortal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myportal.MyPortal.dto.UserDataDTO;
import com.myportal.MyPortal.services.UserDataService;

@RestController
@RequestMapping(value = "/users")
public class UserDataController {
	
	@Autowired
	private UserDataService userDataService;

	@GetMapping
	public List<UserDataDTO> findAll() {
		List<UserDataDTO> result = userDataService.findAll();
		return result;
	}
}
