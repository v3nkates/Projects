import { Component, OnInit } from '@angular/core';
import {model} from '../model'
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mod :model
  message:any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  public registerNow(){
    let resp=this.service.create(this.mod)
    resp.subscribe((data)=>this.message=data);
      }
      onSubmit(){
        this.registerNow()
      }
}
