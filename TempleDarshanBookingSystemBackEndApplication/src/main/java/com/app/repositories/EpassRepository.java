package com.app.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Epass;
import com.app.entities.Temple;
import com.app.entities.User;


public interface EpassRepository extends JpaRepository<Epass, Integer> {
	
	List<Epass> findByUser(User user);
	List<Epass> findByTemple(Temple temple);
}
