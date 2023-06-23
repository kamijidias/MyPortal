package com.myportal.MyPortal.dto;

import com.myportal.MyPortal.entities.UserData;

public class UserDataDTO {
	private Long id;
		
		private String name;
		
		private String secondName;

		private String email;
	
	public UserDataDTO() {
	}

	public UserDataDTO(UserData entity) {
		id = entity.getId();
		name = entity.getName();
		secondName = entity.getSecondName();
		email = entity.getEmail();
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getSecondName() {
		return secondName;
	}

	public String getEmail() {
		return email;
	}
	
}
