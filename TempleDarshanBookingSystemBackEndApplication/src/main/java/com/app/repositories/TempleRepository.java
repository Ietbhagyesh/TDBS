package com.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Role;
import com.app.entities.Temple;
import com.app.entities.User;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;





public interface TempleRepository extends JpaRepository<Temple, Integer> {

	Temple findByEmailAndPassword(String email,String password);

	@Query("select t from Temple t where t.email= :email and t.password= :password ")
	Temple authenticateCitizen(String email,String password);
	@Query("select t from Temple t where t.role= :role")
	List<Temple> findByRole(Role role);
	
}

