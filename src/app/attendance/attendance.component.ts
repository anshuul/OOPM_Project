import { Router } from '@angular/router';
import { AttendanceService } from './../attendance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  rollnumber : number;
  count : number = 0;
  rollnumbers : number[] = [];
  rollnumbers_string : string;
  constructor(private attendanceSrv : AttendanceService, private router : Router) {
    if(!attendanceSrv.isLoggedIn){
      this.router.navigate(['/home']);
    }
   }

  ngOnInit() {
  }

  addNumber(){
    if(this.rollnumber == null)
      return;
    this.count += 1;
    if(this.rollnumbers_string)
      this.rollnumbers_string += "," + this.rollnumber.toString();
    else
      this.rollnumbers_string = this.rollnumber.toString();
    console.log(this.rollnumbers_string);
    this.rollnumbers.push(this.rollnumber);
    console.log(this.rollnumbers);
    this.rollnumber = null;
  }

  addToDatabase(){
    this.attendanceSrv.rollnumbers = this.rollnumbers_string;
    this.attendanceSrv.count = this.count;
    this.attendanceSrv.addToDatabase(); 
  }

}
