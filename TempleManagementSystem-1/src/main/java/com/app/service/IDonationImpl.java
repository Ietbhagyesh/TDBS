package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;
import com.app.dao.DonationRepository;
import com.app.pojos.Donation;
import com.app.pojos.Epass;
@Service
@Transactional
public class IDonationImpl implements IDonationService {
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
