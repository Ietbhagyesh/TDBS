package com.app.services;

import java.util.List;

import com.app.entities.Temple;



public interface TempleService {

	Temple addTempleDetails(Temple t);

	List<Temple> getAllTemples();

	Temple authenticateTemple(String email,String password);

	Temple getDetailsByTempleId(int templeId);

}
