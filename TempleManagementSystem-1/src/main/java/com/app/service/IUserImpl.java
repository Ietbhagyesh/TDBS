package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.dao.UserRepository;
import com.app.pojos.Epass;
import com.app.pojos.Role;
import com.app.pojos.User;
@Service
@Transactional
public class IUserImpl implements IUserService {

	@Autowired
	private UserRepository UserRepo;
	


	@Override
	public User addUserDetails(User u) {
		u.setRole(Role.DEVOTEE);
		return UserRepo.save(u);
	}



	@Override
	public List<User> getAllUsers() {
		
		return UserRepo.findAll();
	}



	@Override
	public User authenticateUser(String email, String password) {
		
		return UserRepo.findByEmailAndPassword(email, password).orElseThrow(() -> new UserNotFoundExc("Invalid email and password"));
	}



	@Override
	public User getDetailsById(int id) {
		Optional<User> user=UserRepo.findById(id);
		User userd=user.orElseThrow(()-> new UserNotFoundExc("id not found"));
		return userd;
	
	}

}
