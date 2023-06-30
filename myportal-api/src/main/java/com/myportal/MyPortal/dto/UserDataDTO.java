package com.myportal.MyPortal.dto;

import com.myportal.MyPortal.entities.UserData;

public class UserDataDTO {
	private Long id;
		
		private String firstName;
		
		private String lastName;

		private String email;
	
	public UserDataDTO() {
	}

	public UserDataDTO(UserData entity) {
		id = entity.getId();
		firstName = entity.getFirstName();
		lastName = entity.getLastName();
		email = entity.getEmail();
	}

	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}
	
}
