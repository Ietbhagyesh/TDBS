package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDate.*;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.type.LocalDateType;
import org.hibernate.validator.constraints.Currency;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "donation")
public class Donation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer donationId;

	private long donationAmount;

	private long cardNo;
	
	private String expDate;
	
	private int cvCode;
	
	private String cardOwner;
	private String donationtype;
	
	
	@OneToOne
	@JoinColumn(name = "u_id")
	
	private User donationOwner;
	
	public Donation() {
		System.out.println("in cnstr of"+getClass().getName());
	}
	
	
	






	public Donation(long donationAmount, long cardNo, String expDate, int cvCode, String cardOwner,
			String donationtype) {
		super();
		this.donationAmount = donationAmount;
		this.cardNo = cardNo;
		this.expDate = expDate;
		this.cvCode = cvCode;
		this.cardOwner = cardOwner;
		this.donationtype = donationtype;
	}









	public String getDonationtype() {
		return donationtype;
	}









	public void setDonationtype(String donationtype) {
		this.donationtype = donationtype;
	}









	public long getCardNo() {
		return cardNo;
	}






	public void setCardNo(long cardNo) {
		this.cardNo = cardNo;
	}






	public String getExpDate() {
		return expDate;
	}






	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}











	public int getCvCode() {
		return cvCode;
	}






	public void setCvCode(int cvCode) {
		this.cvCode = cvCode;
	}






	public String getCardOwner() {
		return cardOwner;
	}






	public void setCardOwner(String cardOwner) {
		this.cardOwner = cardOwner;
	}






	public Integer getDonationId() {
		return donationId;
	}
	public void setDonationId(Integer donationId) {
		this.donationId = donationId;
	}
	public double getDonationAmount() {
		return donationAmount;
	}
	public void setDonationAmount(long donationAmount) {
		this.donationAmount = donationAmount;
	}

	public User getDonationOwner() {
		return donationOwner;
	}
	public void setDonationOwner(User donationOwner) {
		this.donationOwner = donationOwner;
	}
	
}
