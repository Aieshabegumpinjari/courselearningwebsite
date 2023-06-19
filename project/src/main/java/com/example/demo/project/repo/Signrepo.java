package com.example.demo.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.module.Signmodule;

public interface Signrepo extends JpaRepository<Signmodule, Integer> {

	Signmodule findByName(String user);

}
