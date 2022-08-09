package com.emi.spring.mongo.api.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString

@Document(collection="register")
public class customer {
  @Id
  public String username;
  public String name;
  public String phone;
  public String email;
  public String dob;
  
  public String password;
  public String address;
  public String cardtype;
  public String bank;
  public String accountno;
  public String ifsccode;
  public boolean activate;
}
