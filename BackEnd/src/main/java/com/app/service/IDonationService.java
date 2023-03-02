package com.app.service;

import java.util.List;

import com.app.pojos.Donation;


public interface IDonationService {

	

	Donation makePayment(Donation d);
	
	List<Donation> getAllDonations();
	
	Donation getDonationDetailsById(int donationId);
}
