package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Donation;
import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.Temple;
import com.app.entities.User;
import com.app.services.DonationService;
import com.app.services.TempleService;
import com.app.services.UserService;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/temples")
public class TempleController {
	@Autowired
	private TempleService templeService;

	@Autowired
	private DonationService DonationService;

	public TempleController() {
		System.out.println("in cnstr of"+getClass().getName());
	}

	@PostMapping("/")
	public ResponseEntity<?> addNewUser(@RequestBody Temple templeDetails){
		System.out.println("in add new user"+templeDetails);
		try {
			return new ResponseEntity<>(templeService.addTempleDetails(templeDetails),HttpStatus.CREATED);

		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}

	@GetMapping("/")
	public ResponseEntity<List<Temple>> getAllUsers()
	{
		List<Temple> list = templeService.getAllTemples();
		return ResponseEntity.ok(list);
	}


	@PutMapping("/{templeId}")
	public ResponseEntity<?> updateUser(@PathVariable Integer templeId, @RequestBody Temple templeDetails){
		System.out.println("In Temple Controller");
		Temple temple=templeService.getDetailsByTempleId(templeId);
		temple.setTempleName(templeDetails.getTempleName());
		temple.setAddress(templeDetails.getAddress());
		temple.setAdharNo(templeDetails.getAdharNo());
		temple.setEmail(templeDetails.getEmail());
		temple.setMobNo(templeDetails.getMobNo());
		temple.setName(templeDetails.getName());
		temple.setPassword(templeDetails.getPassword());

		Temple updatedTemple=templeService.addTempleDetails(temple);
		return ResponseEntity.ok(updatedTemple);
	}



	

}