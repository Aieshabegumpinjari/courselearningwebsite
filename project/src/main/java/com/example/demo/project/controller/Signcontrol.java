package com.example.demo.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.module.Signmodule;
import com.example.demo.project.repo.Signrepo;

@RestController
@CrossOrigin("http://localhost:3003")
@RequestMapping("/Signdata")
public class Signcontrol {

		@Autowired
		Signrepo repo;
	
	@PostMapping("/logindara")
	public String mthd(@RequestBody Signmodule d)
	{
	 String user=d.getName();
	 Signmodule m=repo.findByName(user);
		if(m==null)
		{
			repo.save(d);
			return "added";
		}
		else
		{
			return "user alredy exist";
		}
	}


	
@PostMapping("/login/{mname}/{pass}")
public String login(@PathVariable String mname,@PathVariable String pass)
 {
	Signmodule ll=repo.findByName(mname);
	if(ll == null)
 {
	return "invalid username";
 }
	else {
				if(ll.getPass().equals(pass)) 
{
					return "success";
				}
				else 
{
					return "invalidpassword";
				}
}
}

}
