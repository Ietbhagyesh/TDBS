package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.TempleNotFoundExc;
import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.Temple;
import com.app.entities.User;
import com.app.repositories.TempleRepository;
import com.app.repositories.UserRepository;
@Service
@Transactional
public class TempleImpl implements TempleService {

	@Autowired
	private TempleRepository TempleRepo;



	@Override
	public List<Temple> getAllTemples() {

		return TempleRepo.findAll();
	}

	@Override
	public Temple addTempleDetails(Temple t) {
		// TODO Auto-generated method stub
		return  TempleRepo.save(t);
	}


	@Override
	public Temple authenticateTemple(String email, String password) {

		return TempleRepo.findByEmailAndPassword(email, password);
	}

	@Override
	public Temple getDetailsByTempleId(int templeId) {
		Optional<Temple> temple=TempleRepo.findById(templeId);
		Temple templeById=temple.orElseThrow(()-> new TempleNotFoundExc("id not found"));
		return templeById;

	}




	/*@Override
	public List<User> getUsersByRole(Role role) {

		List<User> users=UserRepo.findByRole(role);
		if(users.isEmpty()) {
			return null;

		}else {
			return users;			
		}

	}*/

}
