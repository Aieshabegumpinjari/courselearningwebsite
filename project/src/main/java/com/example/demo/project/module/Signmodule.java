package com.example.demo.project.module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signdata")
public class Signmodule {

		@Id
		@GeneratedValue
		int slno;
		String name;
		String email;
		String pass;
		public int getSlno() {
			return slno;
		}
		public void setSlno(int slno) {
			this.slno = slno;
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
		public String getPass() {
			return pass;
		}
		public void setPass(String pass) {
			this.pass = pass;
		}
		
}
