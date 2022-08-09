package com.emi.spring.mongo.api.service;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.emi.spring.mongo.api.model.customer;


public interface customerservice extends MongoRepository<customer,String> {
	

}