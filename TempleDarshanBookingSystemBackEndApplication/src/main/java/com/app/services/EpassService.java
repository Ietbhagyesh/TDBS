package com.app.services;



import java.util.List;

import com.app.entities.Epass;
import com.app.entities.User;


public interface EpassService {
	
	Epass addEPassDetails(Epass u);
	
	List<Epass> getAllPasses();
	
	Epass deleteEpassDetails(int passId);

	Epass getDetailsById(int passId);
}
