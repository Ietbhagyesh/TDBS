package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.dao.EpassRepository;
import com.app.pojos.Epass;
import com.app.pojos.User;

@Service
@Transactional

public class IEpassImpl implements IEpassService{
	@Autowired
	private EpassRepository EpassRepo;
	

	@Override
	public Epass addEPassDetails(Epass u) {
	
		return EpassRepo.save(u);
	}


	@Override
	public List<Epass> getAllPasses() {
		
		return EpassRepo.findAll();
	}


	@Override
	public Epass deleteEpassDetails(int passId) {
		
		
		
		Optional<Epass> optionalEpass=EpassRepo.findById(passId);
		Epass epass=optionalEpass.orElseThrow(()->new UserNotFoundExc("Invalid Product ID "));
		EpassRepo.deleteById(passId);
		return epass;
	}


	@Override
	public Epass getDetailsById(int passId) {
	Optional<Epass> pass=EpassRepo.findById(passId);
	Epass epass=pass.orElseThrow(()-> new UserNotFoundExc("id not found"));
	return epass;
	
	}

}
