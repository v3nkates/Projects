import { Component, OnInit } from '@angular/core';
import { model } from '../model';
import { UserService } from '../user.service';
import { Session } from '../session';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
mod : model
sess:Session
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.getdatabyid(this.sess.username).subscribe(data => {
      this.mod= data[0];
    });
  }


}
