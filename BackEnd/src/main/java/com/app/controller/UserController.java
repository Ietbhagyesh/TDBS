package com.app.controller;

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
import com.app.pojos.Donation;
import com.app.pojos.Epass;
import com.app.pojos.User;
import com.app.service.IDonationService;
import com.app.service.IUserService;
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private IUserService UserService;
	
	@Autowired
	private IDonationService DonationService;
	
	public UserController() {
		System.out.println("in cnstr of"+getClass().getName());
	}

	//@PostMapping("/add")
	@PostMapping
	public ResponseEntity<?> addNewUser(@RequestBody User userDetails){
		System.out.println("in add new user"+userDetails);
		try {
			return new ResponseEntity<>(UserService.addUserDetails(userDetails),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
	
	/* Customized
	@GetMapping("/dis")
	public ResponseEntity<List<User>> getAllUsers()
	{
		List<User> plist = UserService.getAllUsers();
		return ResponseEntity.ok(plist);
		
	}*/
	
	
	@GetMapping
	public List<User> getAllUsers()
	{
		return UserService.getAllUsers();
	}
	
	
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user)
	{
		
		String email=user.getEmail();
		String password=user.getPassword();
		User authenticateUser= UserService.authenticateUser(email, password);
		if(authenticateUser==null)
			throw new UserNotFoundExc("user not found");
	
		return authenticateUser;
			
	}
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody User userDetails){
	User user=UserService.getDetailsById(id);
	
	user.setAddress(userDetails.getAddress());
	user.setAdharNo(userDetails.getAdharNo());
	user.setEmail(userDetails.getEmail());
	user.setMobNo(userDetails.getMobNo());
	user.setName(userDetails.getName());
	user.setPassword(userDetails.getPassword());
	
	User updatedUser=UserService.addUserDetails(user);
	return ResponseEntity.ok(updatedUser);
	
	
}
	
	@PostMapping("/donate")
	public ResponseEntity<?> addDonation(@RequestBody Donation donationDetails){
		System.out.println("in add new user"+donationDetails);
		try {
			return new ResponseEntity<>(DonationService.makePayment(donationDetails),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
	@GetMapping("/donation")
	public List<Donation> getAllDonations(){
		return DonationService.getAllDonations();
	}
	

	@GetMapping("/{id}")
	public Donation getPassById(@PathVariable int id) {
		return DonationService.getDonationDetailsById(id);
	
	}

}