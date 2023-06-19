package com.example.demo.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.module.Regmodule;

public interface Regrepo extends JpaRepository<Regmodule,Integer> {

}
