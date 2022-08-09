import { Component, OnInit } from '@angular/core';
import {model} from '../model'
import { UserService } from '../user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mod : model[];

  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.getalls()

  }
  private getalls(){
    this.userservice.getall().subscribe(data => {
      this.mod= data;
    });
  }
}
