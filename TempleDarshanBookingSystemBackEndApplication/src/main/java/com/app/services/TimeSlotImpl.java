package com.app.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Epass;
import com.app.entities.Temple;
import com.app.entities.TimeSlot;
import com.app.entities.User;
import com.app.repositories.EpassRepository;
import com.app.repositories.TimeSlotRepository;

@Service
@Transactional
public class TimeSlotImpl implements TimeSlotService{
	@Autowired
	private TimeSlotRepository timeSlotRepo;
	

	@Autowired
	private TempleService templeService;

	@Override
	public TimeSlot addTimeSlotDetails(TimeSlot slotDetails, Integer templeId) {
		System.out.println("in impl");
		LocalDate slotDate = slotDetails.getSlotDate();
		TimeSlot present = timeSlotRepo.findBySlotDateAndTempleId(slotDate, templeId);
				
		if(present == null) {
			System.out.println("in if loop");
		Temple temple = templeService.getDetailsByTempleId(templeId);
		System.out.println("ater temple finding");		
		int availableSlot1=slotDetails.getMaxPersonPerSlot1();
		int availableSlot2=slotDetails.getMaxPersonPerSlot2();
		int availableSlot3=slotDetails.getMaxPersonPerSlot3();
		int availableSlot4=slotDetails.getMaxPersonPerSlot4();
		System.out.println("after available slot assigning");

		slotDetails.setAvailableSlot1(availableSlot1);
		slotDetails.setAvailableSlot2(availableSlot2);
		slotDetails.setAvailableSlot3(availableSlot3);
		slotDetails.setAvailableSlot4(availableSlot4);
		System.out.println("after available slot set");
		slotDetails.setTempleId(templeId);
		System.out.println("after atemple ref stted in slotdetail object + before call to repo");

		return timeSlotRepo.save(slotDetails);
		}
		else {
			return present;
			
		}
	}


	@Override
	public List<TimeSlot> getAllTimeSlot() {
		// TODO Auto-generated method stub
		return timeSlotRepo.findAll();
	}


	@Override
	public TimeSlot deleteTimeSlotDetails(int slotId) {

		Optional<TimeSlot> optionalTimeSlot=timeSlotRepo.findById(slotId);
		TimeSlot timeSlot=optionalTimeSlot.orElseThrow(()->new UserNotFoundExc("Invalid Product ID "));
		timeSlotRepo.deleteById(slotId);
		return timeSlot;
	}



	@Override
	public TimeSlot getDetailsById(int slotId) {
		Optional<TimeSlot> slot=timeSlotRepo.findById(slotId);
		TimeSlot timeSlot=slot.orElseThrow(()-> new UserNotFoundExc("id not found"));
		return timeSlot;

	}


	@Override
	public List<TimeSlot> getAllAvailableTimeSlot() {

		return null;
	}


	@Override
	public List<TimeSlot> getAllByTempleId(int templeId) {
		System.out.println("in IMPL before query");
		List<TimeSlot> timeSlotList = timeSlotRepo.findByTempleId(templeId);
		System.out.println("in IMPL after query");
		return timeSlotList;
	}


	/*@Override
	public List<TimeSlot> getByDateTempleIDSlot(TimeSlot slotDetails, Integer templeId) {
		System.out.println("in IMPL");
		LocalDate slotDate = slotDetails.getSlotDate();
		System.out.println("before query");
		
		String slot1 =  "6AM-8AM";
		List<TimeSlot> present2 = timeSlotRepo.findBySlotDateAndTempleIdAndSlot1(slotDate, templeId, slot1);
		System.out.println("after query");
				
		return present2;
	}*/

}
