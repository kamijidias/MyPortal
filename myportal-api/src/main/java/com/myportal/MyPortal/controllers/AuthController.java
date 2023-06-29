package com.myportal.MyPortal.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myportal.MyPortal.model.User;
import com.myportal.MyPortal.security.AuthToken;
import com.myportal.MyPortal.security.TokenUtil;

@RestController
public class AuthController {
	
	@GetMapping("/free")
	public String sayFreeHello() {
		return "Este é um endpoint liberado pela nossa API";
	}
	
	@GetMapping("/auth")
	public String sayAuthHello() {
		return "Este é um endpoint que precisa de autentificação";
	}
	
	@PostMapping("/login")
	public ResponseEntity<AuthToken> realizarLogin(@RequestBody User u) {
		if (u.getEmail().equals("kamiji@dev.com") && u.getPassword().equals("kamiji")) {
			return ResponseEntity.ok(TokenUtil.encodeToken(u));
		}
		return ResponseEntity.status(403).build();
	}
}
