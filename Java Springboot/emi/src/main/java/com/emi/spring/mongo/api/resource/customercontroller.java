package com.emi.spring.mongo.api.resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.emi.spring.mongo.api.model.customer;
import com.emi.spring.mongo.api.service.customerservice;

@RestController
public class customercontroller {

	@Autowired
	private customerservice repository;
	@CrossOrigin(origins = "*")
	@PostMapping("/add")
	public String saveBook(@RequestBody customer cus) {
		repository.save(cus);
		return "registration added " ;
	}

	@GetMapping("/findall")
	public List<customer> getcus() {
		return repository.findAll();
	}

	@GetMapping("/findall/{id}")
	public Optional<customer> getcus(@PathVariable String id) {
		
		return repository.findById(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deletecus(@PathVariable String id) {
		repository.deleteById(id);
		return "deleted with id : " + id;
	}

}
