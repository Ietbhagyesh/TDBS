package com.app.services;

import java.util.List;

import com.app.entities.Donation;


public interface DonationService {

	

	Donation makePayment(Donation d);
	
	List<Donation> getAllDonations();
	
	Donation getDonationDetailsById(int donationId);
}
