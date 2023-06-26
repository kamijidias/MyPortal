package com.myportal.MyPortal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myportal.MyPortal.entities.UserData;

public interface UserDataRepository extends JpaRepository<UserData, Long> {
}
