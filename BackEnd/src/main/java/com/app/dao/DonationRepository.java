package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Donation;


public interface DonationRepository extends JpaRepository<Donation, Integer> {

}
