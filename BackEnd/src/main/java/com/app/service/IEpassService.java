package com.app.service;



import java.util.List;

import com.app.pojos.Epass;
import com.app.pojos.User;


public interface IEpassService {
	
	Epass addEPassDetails(Epass u);
	
	List<Epass> getAllPasses();
	
	Epass deleteEpassDetails(int passId);

	Epass getDetailsById(int passId);
}
