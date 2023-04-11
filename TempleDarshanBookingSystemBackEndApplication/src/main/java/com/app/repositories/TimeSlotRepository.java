package com.app.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Epass;
import com.app.entities.Role;
import com.app.entities.Temple;
import com.app.entities.TimeSlot;
import com.app.entities.User;

public interface TimeSlotRepository extends JpaRepository<TimeSlot, Integer>  {

	TimeSlot findBySlotDateAndTempleId(LocalDate slotDate, Integer templeId);

	List<TimeSlot> findByTempleId(int templeId);
	
	
	List<TimeSlot> findBySlotDateAndTempleIdAndSlot1(LocalDate slotDate, Integer templeId, String slot1);
	
	
}
