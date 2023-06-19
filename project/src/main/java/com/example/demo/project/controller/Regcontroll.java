package com.example.demo.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.module.Regmodule;
import com.example.demo.project.repo.Regrepo;

@RestController
@CrossOrigin("http://localhost:3003")
@RequestMapping("/regdata")
public class Regcontroll {
	
	
	@Autowired
	Regrepo repo;
	
	@PostMapping("/regpost")
	public String pos(@RequestBody Regmodule d) {
		repo.save(d);
		return "data saved";
		}

}
