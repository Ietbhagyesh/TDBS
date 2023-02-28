package com.app.pojos;


import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.mapping.AccessOptions.GetOptions.GetNulls;
import org.springframework.format.annotation.DateTimeFormat;



@Entity
@Table(name = "epass")
public class Epass {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer passId;
	@Column(length = 20,name = "pass_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate passDate;
	@Column(length = 20)
	private String slot; 

  
	private int peoples;
	
	public int getPeoples() {
		return peoples;
	}

	public void setPeoples(int peoples) {
		this.peoples = peoples;
	}

	@OneToOne
	@JoinColumn(name = "u_id")
	private User user;
	public Epass() {
		System.out.println("in cnstr of"+getClass().getName());
	}



	public Epass(LocalDate passDate, String slot, int peoples) {
		super();
		this.passDate = passDate;
		this.slot = slot;
		this.peoples = peoples;
	}

	public Integer getPassId() {
		return passId;
	}

	public void setPassId(Integer passId) {
		this.passId = passId;
	}

	public LocalDate getPassDate() {
		return passDate;
	}

	public void setPassDate(LocalDate passDate) {
		this.passDate = passDate;
	}

	public String getSlot() {
		return slot;
	}

	public void setSlot(String slot) {
		this.slot = slot;
	}

	
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Epass [passId=" + passId + ", passDate=" + passDate + ", slot=" + slot + "]";
	}
	
	
	
	

}
