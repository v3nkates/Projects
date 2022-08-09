import { Component, OnInit } from '@angular/core';
import {model} from '../model'
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modl : model
  use : string
  user:string
  pass:string
  constructor(private userservice : UserService,private router: Router) { }

  ngOnInit(): void {

    
    this.userservice.getdatabyid(this.use).subscribe(data => {
      this.modl= data[0];
    });

   
  }
  onSubmit(){
  if(this.modl.username=="admin" && this.modl.password=="admin"){
      
    this.router.navigate(['admin']);
  }
  else{
    this.userservice.login(this.modl.username,this.modl.password).subscribe(data => {
      this.modl= data;
    });
  }
}
 
}
