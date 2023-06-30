package com.myportal.MyPortal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.myportal.MyPortal.entities.UserData;
import com.myportal.MyPortal.repositories.UserDataRepository;

@Service
public class CreateUserService {

    @Autowired
    UserDataRepository userDataRepository;
    private String message = "User already exists!";

    private BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public UserData execute(UserData user) {

        UserData existUser = userDataRepository.findByEmail(user.getEmail());

        if(existUser != null) {
            throw new Error(message);
        }

        user.setPassword(passwordEncoder().encode(user.getPassword()));

        UserData createdUser = userDataRepository.save(user);

        return createdUser;
    }
}
