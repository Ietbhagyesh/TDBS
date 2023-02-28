package com.app.service;

import java.util.List;

import com.app.pojos.Epass;
import com.app.pojos.User;

public interface IUserService {

	
	User addUserDetails(User u);
	
	List<User> getAllUsers();
	
	User authenticateUser(String email,String password);
	User getDetailsById(int id);
	
}
