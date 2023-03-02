package com.app.pojos;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer Id;
	@Column(length = 30)

	private String name;
	
	
	
	@Column(unique = true)
	private String email;
	@Column( nullable = false)
	private String password;
	

	private long mobNo;

	private  long adharNo;
	
	@NotBlank(message = "Please Enter Your Address")
	private String address;
	@Column(length = 30)
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.LAZY)

	private Epass userPass;
	
	@OneToOne(mappedBy ="donationOwner" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)


	private Donation donations;
	
	@OneToOne(mappedBy = "poojaOwner",cascade = CascadeType.ALL)
	private Pooja userPooja;
	
	public User() {
		System.out.println("in constr of"+getClass().getName());
	}
	
	

	public User(String name, String email, String password, int mobNo, int adharNo, String address) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobNo = mobNo;
		this.adharNo = adharNo;
		this.address = address;
	
	}


	

	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	



	public Donation getDonations() {
		return donations;
	}



	public void setDonations(Donation donations) {
		this.donations = donations;
	}



	public Pooja getUserPooja() {
		return userPooja;
	}



	public void setUserPooja(Pooja userPooja) {
		this.userPooja = userPooja;
	}



	public Integer getId() {
		return Id;
	}



	public void setId(Integer id) {
		Id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}





	public long getMobNo() {
		return mobNo;
	}



	public void setMobNo(long mobNo) {
		this.mobNo = mobNo;
	}



	public long getAdharNo() {
		return adharNo;
	}



	public void setAdharNo(long adharNo) {
		this.adharNo = adharNo;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}



	public Epass getUserPass() {
		return userPass;
	}



	public void setUserPass(Epass userPass) {
		this.userPass = userPass;
	}


	

	@Override
	public String toString() {
		return "User [Id=" + Id + ", name=" + name + ", email=" + email + ", mobNo=" + mobNo + ", adharNo=" + adharNo
				+ ", address=" + address + ", role=" + role + "]";
	}



	public void addEpass(Epass epass)
	{
		userPass=epass;
		epass.setUser(this);
		
		
	}
	
	public void removeEpass(Epass epass)
	{
		userPass=null;
		epass.setUser(null);
		
		
	}
	public void addDonation(Donation donation)
	{
		donations=null;
		donation.setDonationOwner(this);
			
	}
	
	public void removeDonation(Donation donation)
	{
		donations=null;
		donation.setDonationOwner(null);
			
	}
	
	public void addPooja(Pooja pooja)
	{
		userPooja=pooja;
		pooja.setPoojaOwner(this);
		
	}
	
	public void removePooja(Pooja pooja)
	{
		userPooja=null;
		pooja.setPoojaOwner(null);
		
	}
}
