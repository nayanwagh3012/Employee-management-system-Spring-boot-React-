package com.ems.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	private long id;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "age", nullable = false)
	private int age;
	
	@Column(name = "gender", nullable = false)
	private char gender;
	
	@Column(name = "phone", nullable = false)
	private String phone;
	
	@Column(name = "email", nullable = false, unique = true)
	private String email;
	
	@Column(name = "current_add", nullable = false)
	private String current_add;
	
	@Column(name = "permenant_add", nullable = false)
	private String permenant_add;

	
	
	public Employee() {
		
		// TODO Auto-generated constructor stub
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public char getGender() {
		return gender;
	}



	public void setGender(char gender) {
		this.gender = gender;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getCurrent_add() {
		return current_add;
	}



	public void setCurrent_add(String current_add) {
		this.current_add = current_add;
	}



	public String getPermenant_add() {
		return permenant_add;
	}



	public void setPermenant_add(String permenant_add) {
		this.permenant_add = permenant_add;
	}



	public Employee(long id, String name, int age, char gender, String phone, String email, String current_add,
			String permenant_add) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.phone = phone;
		this.email = email;
		this.current_add = current_add;
		this.permenant_add = permenant_add;
	}
	
	
}
