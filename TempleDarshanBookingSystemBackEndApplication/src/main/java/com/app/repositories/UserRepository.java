package com.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Role;
import com.app.entities.User;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;





public interface UserRepository extends JpaRepository<User, Integer> {

	User findByEmailAndPassword(String email,String password);

	@Query("select u from User u where u.email= :email and u.password= :password ")
	User authenticateCitizen(String email,String password);
	@Query("select u from User u where u.role= :role")
	List<User> findByRole(Role role);
	
}

