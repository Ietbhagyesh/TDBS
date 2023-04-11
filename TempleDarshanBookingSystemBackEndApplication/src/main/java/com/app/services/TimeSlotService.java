package com.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.entities.Epass;
import com.app.entities.TimeSlot;

public interface TimeSlotService {

	List<TimeSlot> getAllTimeSlot();

	TimeSlot addTimeSlotDetails(TimeSlot slotDetails, Integer templeId);

	TimeSlot getDetailsById(int slotid);

	TimeSlot deleteTimeSlotDetails(int slotId);

	List<TimeSlot> getAllAvailableTimeSlot();

	List<TimeSlot> getAllByTempleId(int templeId);

	//List<TimeSlot> getByDateTempleIDSlot(TimeSlot slotDetails, Integer templeId);


}
