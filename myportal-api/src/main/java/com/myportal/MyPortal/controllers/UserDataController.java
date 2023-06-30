package com.myportal.MyPortal.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myportal.MyPortal.dto.UserDataDTO;
import com.myportal.MyPortal.entities.UserData;
import com.myportal.MyPortal.services.CreateUserService;
import com.myportal.MyPortal.services.UserDataService;

@RestController
@RequestMapping(value = "/users")
public class UserDataController {
	
	@Autowired
	private UserDataService userDataService;

	@Autowired
	private CreateUserService createUserService;

	@GetMapping
	public List<UserDataDTO> findAll() {
		List<UserDataDTO> result = userDataService.findAll();
		return result;
	}

	@PostMapping("/create")
	public UserData create(@RequestBody UserData user) {
		return createUserService.execute(user);
	}
}
