package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.entities.Donation;
import com.app.entities.Epass;
import com.app.repositories.DonationRepository;
@Service
@Transactional
public class DonationImpl implements DonationService {
	@Autowired
	private DonationRepository donationRepo;

	@Override
	public Donation makePayment(Donation d) {
		
		return donationRepo.save(d);
	}

	@Override
	public List<Donation> getAllDonations() {
		return donationRepo.findAll();
		
	}

	@Override
	public Donation getDonationDetailsById(int donationId) {
	
		
		
		Optional<Donation> donation=donationRepo.findById(donationId);
		 Donation donations=donation.orElseThrow(()-> new UserNotFoundExc("id not found"));
		return donations;
		
		
		
	
	}

}
