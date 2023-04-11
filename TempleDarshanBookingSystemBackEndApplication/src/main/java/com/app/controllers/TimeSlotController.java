package com.app.controllers;

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

import com.app.entities.Epass;
import com.app.entities.TimeSlot;
import com.app.entities.User;
import com.app.services.EpassService;
import com.app.services.TimeSlotService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/timeslot")
public class TimeSlotController {
	
	@Autowired
	private TimeSlotService  timeslotService;
	
	public TimeSlotController() {
		System.out.println("in cnst of"+getClass().getName());
	}
	
	@GetMapping
	public ResponseEntity<List<TimeSlot>> getAllTimeSlot()
	{
		List<TimeSlot> tList = timeslotService.getAllTimeSlot();
		return ResponseEntity.ok(tList);
	}
	
	@GetMapping("/getAllAvailableTimeSlot")
	public ResponseEntity<List<TimeSlot>> getAllAvailableTimeSlot()
	{
		List<TimeSlot> tList = timeslotService.getAllAvailableTimeSlot();
		return ResponseEntity.ok(tList);
	}
	
	
	
	@PostMapping("/temple/{templeId}")
	public ResponseEntity<?> addNewTimeSlot(@RequestBody TimeSlot slotDetails,@PathVariable Integer templeId){
	
		System.out.println("in add new user"+slotDetails);
		try {	
						
			return new ResponseEntity<>(timeslotService.addTimeSlotDetails(slotDetails, templeId),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
	
	//@PostMapping("/temple/{templeId}/timeslot")
	
		
		@GetMapping("/{slotid}")
		public TimeSlot getSlotById(@PathVariable int slotid) {
			return timeslotService.getDetailsById(slotid);
		
		}
		@GetMapping("/temple/{templeId}")
		public List<TimeSlot> getSlotByTempleId(@PathVariable int templeId) {
			System.out.println("in controller");
			return timeslotService.getAllByTempleId(templeId);
		
		}
	
	@DeleteMapping("/{slotId}")
	public ResponseEntity<?>  deleteTimeSlotDetails(@PathVariable int slotId)
	{try {
		return new ResponseEntity<>(timeslotService.deleteTimeSlotDetails(slotId), HttpStatus.OK);
	} catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}	

	}
	
	/*@GetMapping("/getDateTempleIDSlot/temple/{templeId}")
	public ResponseEntity<List<TimeSlot>> getDateTempleIDSlot(@RequestBody TimeSlot slotDetails,@PathVariable Integer templeId)
	{
		System.out.println("in controller");
		List<TimeSlot> tList = timeslotService.getByDateTempleIDSlot(slotDetails,templeId);
		return ResponseEntity.ok(tList);
	}*/

}
