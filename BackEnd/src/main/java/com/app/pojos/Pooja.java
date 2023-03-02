package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "pooja")
public class Pooja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer poojaId;
	
	@Column(length = 20,name = "pooja_price")
	private double poojaPrice;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate pDate;
	



	@Column(length = 20,name = "pooja_slot")
	private String poojaSlot;
	
	@OneToOne
	@JoinColumn(name = "u_id")
	private User poojaOwner;
	
	public Pooja() {
		System.out.println("in cnstr of"+getClass().getName());
	}

	

	public Pooja(double poojaPrice, LocalDate pDate, String poojaSlot) {
		super();
		this.poojaPrice = poojaPrice;
		this.pDate = pDate;
		this.poojaSlot = poojaSlot;
	}

	public Integer getPoojaId() {
		return poojaId;
	}

	public void setPoojaId(Integer poojaId) {
		this.poojaId = poojaId;
	}

	public double getPoojaPrice() {
		return poojaPrice;
	}

	public void setPoojaPrice(double poojaPrice) {
		this.poojaPrice = poojaPrice;
	}

	public String getPoojaSlot() {
		return poojaSlot;
	}

	public void setPoojaSlot(String poojaSlot) {
		this.poojaSlot = poojaSlot;
	}

	public User getPoojaOwner() {
		return poojaOwner;
	}

	public void setPoojaOwner(User poojaOwner) {
		this.poojaOwner = poojaOwner;
	}
	public void setpDate(LocalDate pDate) {
		this.pDate = pDate;
	}
	public LocalDate getpDate() {
		return pDate;
	}

	@Override
	public String toString() {
		return "Pooja [poojaId=" + poojaId + ", poojaPrice=" + poojaPrice + ", pDate=" + pDate + ", poojaSlot="
				+ poojaSlot + "]";
	}

	
	

}
