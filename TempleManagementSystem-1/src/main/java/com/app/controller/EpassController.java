package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Epass;
import com.app.pojos.User;
import com.app.service.IEpassService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/epass")
public class EpassController {
	
	@Autowired
	private IEpassService  epassService;
	public EpassController() {
		System.out.println("in cnst of"+getClass().getName());
	}
	
	@GetMapping
	public List<Epass> getAllPasses()
	{
		return epassService.getAllPasses();
	}
	@PostMapping
	public ResponseEntity<?> addNewPass(@RequestBody Epass passDetails){
		System.out.println("in add new user"+passDetails);
		try {
			
			return new ResponseEntity<>(epassService.addEPassDetails(passDetails),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
		
		@GetMapping("/{id}")
		public Epass getPassById(@PathVariable int id) {
			return epassService.getDetailsById(id);
		
		}
	
	@DeleteMapping("/{passId}")
	public ResponseEntity<?>  deleteProductDetails(@PathVariable int passId)
	{try {
		return new ResponseEntity<>(epassService.deleteEpassDetails(passId), HttpStatus.OK);
	} catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}	

	}

}
